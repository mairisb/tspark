import appDataSource from '../config/app-data-source';
import User from '../models/user.model';

const userRepository = appDataSource.getRepository(User);

const getAll = () => {
  return userRepository.find();
};

const existsByEmail = (email: string) => {
  return userRepository.exist({ where: { email } });
};

const userService = {
  getAll,
  existsByEmail,
};

export default userService;
