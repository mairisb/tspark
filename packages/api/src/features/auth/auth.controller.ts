import { AuthCheckResponse, CookieKeys, UserDto } from '@tspark/common';
import { inject } from 'inversify';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import jwt from 'jsonwebtoken';
import { mapper } from '../../core/auto-mapper/mapper';
import { config } from '../../core/config/config';
import { BaseController } from '../../core/controller/base.controller';
import { Services } from '../../core/di/di.identifiers';
import { User } from '../user/user.entity';
import { IAuthService } from './auth.service.type';

@controller('/auth')
export class AuthController extends BaseController {
  constructor(@inject(Services.Auth) private authService: IAuthService) {
    super();
  }

  @httpPost('/register')
  public async register() {
    try {
      const user = await this.authService.register(
        this.httpContext.request.body,
      );

      const userDto = mapper.map(user, User, UserDto);

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

      const userDto = mapper.map(user, User, UserDto);

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
    const token = this.cookies[CookieKeys.AuthToken];

    const user = await this.authService.getUser(token);
    if (!user) {
      this.clearJwtCookie();
      return this.json({ isAuthenticated: false });
    }

    const userDto = mapper.map(user, User, UserDto);

    return this.json({
      isAuthenticated: true,
      user: userDto,
    } as AuthCheckResponse);
  }

  private setJwtCookie(userDto: UserDto) {
    const token = jwt.sign({ sub: userDto.id }, config.jwtSecret, {
      expiresIn: '1h',
      algorithm: 'HS256',
      issuer: config.jwtIssuer,
      audience: config.jwtAudience,
    });

    this.httpContext.response.cookie(CookieKeys.AuthToken, token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 3600000,
    });
  }

  private clearJwtCookie() {
    this.httpContext.response.clearCookie(CookieKeys.AuthToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
  }
}
