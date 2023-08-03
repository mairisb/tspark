import { LoginRequest, RegisterRequest } from '@jspark/common';
import bcrypt from 'bcrypt';
import { appDataSource } from '../config/app-data-source';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { userService } from './user.service';

const userRepository = appDataSource.getRepository(User);

const register = async (registerRequest: RegisterRequest) => {
  const userAlreadyExists = await userService.existsByEmail(
    registerRequest.email
  );
  if (userAlreadyExists) {
    throw new Error('User already exists.');
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(
    registerRequest.password,
    saltRounds
  );

  const auth = new Auth();
  auth.hashedPassword = hashedPassword;

  const user = new User();
  user.email = registerRequest.email;
  user.auth = auth;

  return userRepository.save(user);
};

const login = async (loginRequest: LoginRequest) => {
  const user = await userRepository.findOneOrFail({
    relations: { auth: true },
    where: { email: loginRequest.email },
  });
  const isMatch = await bcrypt.compare(
    loginRequest.password,
    user.auth.hashedPassword
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
