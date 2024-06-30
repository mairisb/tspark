import { LoginRequest, RegisterRequest } from '@tspark/common';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'inversify';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../../core/config';
import { Services } from '../../core/inversify.identifiers';
import { User } from '../user/user.entity';
import { userRepository } from '../user/user.repository';
import { IUserService } from '../user/user.service.type';
import { Auth } from './auth.entity';
import { IAuthService } from './auth.service.type';

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject(Services.User) private userService: IUserService) {}

  public decodeToken(token: string): JwtPayload | null {
    const isTokenValid = jwt.verify(token, config.JWT_SECRET);
    if (!isTokenValid) {
      throw new Error('Invalid authentication token.');
    }

    return jwt.decode(token, { json: true });
  }

  public async register(registerRequest: RegisterRequest) {
    const userAlreadyExists = await this.userService.existsByEmail(
      registerRequest.email,
    );
    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const hashedPassword = await bcrypt.hash(
      registerRequest.password,
      config.SALT_ROUNDS,
    );
    const user = this.createUser(registerRequest, hashedPassword);

    return userRepository.save(user);
  }

  public async login(loginRequest: LoginRequest) {
    const user = await userRepository.findOneOrFail({
      relations: { auth: true },
      where: { email: loginRequest.email },
    });

    const isMatch = await bcrypt.compare(
      loginRequest.password,
      user.auth.hashedPassword,
    );
    if (!isMatch) {
      throw Error('Incorrect password.');
    }

    return user;
  }

  private createUser(request: RegisterRequest, hashedPassword: string): User {
    const auth = new Auth();
    auth.hashedPassword = hashedPassword;

    const user = new User();
    user.username = request.username;
    user.email = request.email;
    user.auth = auth;

    return user;
  }
}
