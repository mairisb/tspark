import bcrypt from 'bcrypt';
import appDataSource from '../config/app-data-source';
import User from '../models/user.model';

const userRepository = appDataSource.getRepository(User);

export interface UserInfo {
  id: number;
  email: string;
  password: string;
}

const register = (userInfo: UserInfo) => {
  const saltRounds = 10;
  return bcrypt.hash(userInfo.password, saltRounds).then((hashedPassword) =>
    userRepository.insert({
      email: userInfo.email,
      password: hashedPassword,
    })
  );
};

const login = (userInfo: UserInfo) => {
  console.log(userInfo);
};

const authService = {
  register,
};

export default authService;
