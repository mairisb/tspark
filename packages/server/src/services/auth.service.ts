import bcrypt from 'bcrypt';
import { appDataSource } from '../config/app-data-source';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

const userRepository = appDataSource.getRepository(User);

const register = async (args: { email: string; password: string }) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(args.password, saltRounds);

  const auth = new Auth();
  auth.hashedPassword = hashedPassword;

  const user = new User();
  user.email = args.email;
  user.auth = auth;

  return userRepository.save(user);
};

const login = async (args: { email: string; password: string }) => {
  const user = await userRepository.findOneOrFail({
    relations: { auth: true },
    where: { email: args.email },
  });
  const isMatch = await bcrypt.compare(args.password, user.auth.hashedPassword);
  if (!isMatch) {
    throw Error('Incorrect password.');
  }
  return user;
};

export const authService = {
  register,
  login,
};
