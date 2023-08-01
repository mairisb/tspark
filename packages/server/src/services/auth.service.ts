import bcrypt from 'bcrypt';
import { appDataSource } from '../config/app-data-source';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

const userRepository = appDataSource.getRepository(User);

export interface UserInfo {
  id: number;
  email: string;
  password: string;
}

const register = async (userInfo: UserInfo) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);

  const auth = new Auth();
  auth.hashedPassword = hashedPassword;

  const user = new User();
  user.email = userInfo.email;
  user.auth = auth;

  return userRepository.save(user);
};

const login = async (userInfo: UserInfo) => {
  const user = await userRepository.findOneOrFail({
    relations: { auth: true },
    where: { email: userInfo.email },
  });
  const isMatch = await bcrypt.compare(
    userInfo.password,
    user.auth.hashedPassword
  );
  if (!isMatch) {
    throw Error('Incorrect password.');
  }
};

export const authService = {
  register,
  login,
};
