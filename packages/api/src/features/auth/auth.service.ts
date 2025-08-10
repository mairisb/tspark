import { LoginRequest, RegisterRequest } from '@tspark/common';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'inversify';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../../core/config/config';
import { Services } from '../../core/di/di.identifiers';
import { User } from '../user/user.entity';
import { IUserService } from '../user/user.service.type';
import { Auth } from './auth.entity';
import { IAuthService } from './auth.service.type';

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject(Services.User) private userService: IUserService) {}

  public async register(registerRequest: RegisterRequest) {
    const userAlreadyExists = await this.userService.existsByEmail(
      registerRequest.email,
    );
    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const hashedPassword = await bcrypt.hash(
      registerRequest.password,
      config.saltRounds,
    );
    const user = this._createUser(registerRequest, hashedPassword);

    return this.userService.save(user);
  }

  public async login(loginRequest: LoginRequest) {
    const user = await this.userService.getByEmailWithAuth(loginRequest.email);

    const isMatch = await bcrypt.compare(
      loginRequest.password,
      user.auth.hashedPassword,
    );
    if (!isMatch) {
      throw Error('Incorrect password.');
    }

    return user;
  }

  public async getUser(token: string) {
    if (!token) {
      return null;
    }

    try {
      const tokenPayload = this._getTokenPayload(token);

      const userId = tokenPayload?.sub;
      if (!userId) {
        return null;
      }

      const user = await this.userService.get(userId);

      return user;
    } catch (err) {
      return null;
    }
  }

  private _getTokenPayload(token: string): JwtPayload {
    const payload = jwt.verify(token, config.jwtSecret);
    if (typeof payload === 'string') {
      throw new Error('Invalid token payload');
    }

    return payload;
  }

  private _createUser(request: RegisterRequest, hashedPassword: string): User {
    const auth = new Auth();
    auth.hashedPassword = hashedPassword;

    const user = new User();
    user.username = request.username;
    user.email = request.email;
    user.auth = auth;

    return user;
  }
}
