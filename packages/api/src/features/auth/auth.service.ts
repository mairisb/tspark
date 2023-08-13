import { LoginRequest, RegisterRequest } from '@tspark/common';
import bcrypt from 'bcrypt';
import { appDataSource } from '../../core/app-data-source';
import { Auth } from './auth.entity';
import { User } from '../user/user.entity';
import { userService } from '../user/user.service';
import { config } from '../../core/config';

const userRepository = appDataSource.getRepository(User);

const createUser = (request: RegisterRequest, hashedPassword: string): User => {
  const auth = new Auth();
  auth.hashedPassword = hashedPassword;

  const user = new User();
  user.username = request.username;
  user.email = request.email;
  user.auth = auth;

  return user;
};

const register = async (registerRequest: RegisterRequest) => {
  const userAlreadyExists = await userService.existsByEmail(
    registerRequest.email,
  );
  if (userAlreadyExists) {
    throw new Error('User already exists.');
  }

  const hashedPassword = await bcrypt.hash(
    registerRequest.password,
    config.SALT_ROUNDS,
  );
  const user = createUser(registerRequest, hashedPassword);

  return userRepository.save(user);
};

const login = async (loginRequest: LoginRequest) => {
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

export const authService = {
  register,
  login,
};
