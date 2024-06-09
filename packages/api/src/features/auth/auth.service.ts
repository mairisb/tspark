import { LoginRequest, RegisterRequest } from '@tspark/common';
import bcrypt from 'bcrypt';
import { config } from '../../core/config';
import { User } from '../user/user.entity';
import { userRepository } from '../user/user.repository';
import { Auth } from './auth.entity';
import { UserService } from '../user/user.service';

export class AuthService {
  private userService = new UserService();

  public createUser = (
    request: RegisterRequest,
    hashedPassword: string,
  ): User => {
    const auth = new Auth();
    auth.hashedPassword = hashedPassword;

    const user = new User();
    user.username = request.username;
    user.email = request.email;
    user.auth = auth;

    return user;
  };

  public register = async (registerRequest: RegisterRequest) => {
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
  };

  public login = async (loginRequest: LoginRequest) => {
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
  };
}
