import { Request } from 'express';
import { inject, injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { config } from '../../core/config';
import { Services } from '../../core/inversify.identifiers';
import { mapUserToUserDto } from '../user/user.dto.mapper';
import { IUserService } from '../user/user.service.type';
import { IAuthProvider } from './auth.provider.type';
import { IAuthService } from './auth.service.type';
import { Principal } from './principal';

@injectable()
export class AuthProvider implements IAuthProvider {
  @inject(Services.Auth)
  private readonly authService: IAuthService;

  @inject(Services.User)
  private userService: IUserService;

  public async getUser(req: Request): Promise<Principal> {
    console.log('AuthProvider.getUser was called!!!');

    const principal = new Principal();

    try {
      const token = req.cookies?.login_token;
      if (!token) {
        return principal;
      }

      const isTokenValid = jwt.verify(token, config.JWT_SECRET);
      if (!isTokenValid) {
        return principal;
      }

      const decodedToken = this.authService.decodeToken(token);
      if (!decodedToken?.sub) {
        return principal;
      }

      const email = decodedToken.sub;
      const user = await this.userService.getByEmail(email);
      principal.details = mapUserToUserDto(user);

      return principal;
    } catch (err) {
      return principal;
    }
  }
}
