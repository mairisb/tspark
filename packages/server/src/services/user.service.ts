import appDataSource from '../config/app-data-source';
import User from '../models/user.model';

const userRepository = appDataSource.getRepository(User);

const getAll = () => {
  return userRepository.find();
};

const get = (id: number) => {
  return userRepository.findOneOrFail({ where: { id } });
};

const getByEmail = (email: string) => {
  return userRepository.findOneOrFail({ where: { email } });
};

const existsByEmail = (email: string) => {
  return userRepository.exist({ where: { email } });
};

const userService = {
  getAll,
  get,
  getByEmail,
  existsByEmail,
};

export default userService;
