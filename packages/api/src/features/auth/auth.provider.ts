import { ICookies, UserDto } from '@tspark/common';
import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { BaseController } from '../../core/base.controller';
import { Services } from '../../core/inversify.identifiers';
import { mapper } from '../../core/mapper';
import { User } from '../user/user.entity';
import { IAuthProvider } from './auth.provider.type';
import { IAuthService } from './auth.service.type';
import { Principal } from './principal';

@injectable()
export class AuthProvider extends BaseController implements IAuthProvider {
  @inject(Services.Auth)
  private readonly authService: IAuthService;

  public async getUser(req: Request): Promise<Principal> {
    const principal = new Principal();

    const token = (req.cookies as ICookies).auth_token;

    const user = await this.authService.getUser(token);
    if (!user) {
      return principal;
    }

    const userDto = mapper.map(user, User, UserDto);

    principal.details = userDto;
    return principal;
  }
}
