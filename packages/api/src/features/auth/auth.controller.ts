import { UserDto } from '@tspark/common';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import jwt from 'jsonwebtoken';
import { config } from '../../core/config';
import { Services } from '../../core/inversify.identifiers';
import { mapUserToUserDto } from '../user/user.dto.mapper';
import { IUserService } from '../user/user.service.type';
import { IAuthService } from './auth.service.type';

@controller('/auth')
export class AuthController extends BaseHttpController {
  constructor(
    @inject(Services.Auth) private authService: IAuthService,
    @inject(Services.User) private userService: IUserService,
  ) {
    super();
  }

  @httpPost('/register')
  public async register() {
    try {
      const user = await this.authService.register(
        this.httpContext.request.body,
      );

      const userDto = mapUserToUserDto(user);

      this.setJwtCookie(userDto);
      return this.json(userDto);
    } catch (err) {
      console.error('Registration failed.', err);
      return this.json({ error: 'Registration failed.' }, 500);
    }
  }

  @httpPost('/login')
  public async login() {
    try {
      const user = await this.authService.login(this.httpContext.request.body);

      const userDto = mapUserToUserDto(user);

      this.setJwtCookie(userDto);
      return this.json(userDto);
    } catch (err) {
      console.log('Login failed.', err);
      return this.json({ error: 'Login failed.' }, 500);
    }
  }

  @httpPost('/logout')
  public logout() {
    this.clearJwtCookie();
    return this.json({ message: 'Logout successful.' });
  }

  @httpGet('/auth-check')
  public async authCheck() {
    const token = this.httpContext.request.cookies.login_token;
    if (!token) {
      return this.json(
        {
          isAuthenticated: false,
          error: 'No authentication token provided.',
        },
        401,
      );
    }

    try {
      const isTokenValid = jwt.verify(token, config.JWT_SECRET);
      if (!isTokenValid) {
        this.clearJwtCookie();
        return this.json(
          {
            isAuthenticated: false,
            error: 'Invalid authentication token.',
          },
          401,
        );
      }

      const decodedToken = jwt.decode(token, { json: true });
      if (!decodedToken?.sub) {
        throw new Error('User information not found in token');
      }

      const email = decodedToken.sub;
      const user = await this.userService.getByEmail(email);
      const userDto = mapUserToUserDto(user);

      return this.json({ isAuthenticated: true, user: userDto });
    } catch (err) {
      console.error('Auth check failed:', err);
      this.clearJwtCookie();
      return this.json(
        {
          isAuthenticated: false,
          error: 'Auth check failed.',
        },
        500,
      );
    }
  }

  private setJwtCookie(userDto: UserDto) {
    const token = jwt.sign({ sub: userDto.email }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    this.httpContext.response.cookie('login_token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 3600000,
    });
  }

  private clearJwtCookie() {
    this.httpContext.response.clearCookie('login_token', {
      sameSite: 'none',
      secure: true,
    });
  }
}
