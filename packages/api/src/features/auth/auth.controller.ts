import { AuthCheckResponse, UserDto } from '@tspark/common';
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
import { IAuthService } from './auth.service.type';

@controller('/auth')
export class AuthController extends BaseHttpController {
  constructor(@inject(Services.Auth) private authService: IAuthService) {
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
    const token = this.cookies.login_token;

    const user = await this.authService.getUser(token);
    if (!user) {
      this.clearJwtCookie();
      return this.json({ isAuthenticated: false });
    }

    const userDto = mapUserToUserDto(user);

    return this.json({
      isAuthenticated: true,
      user: userDto,
    } as AuthCheckResponse);
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
