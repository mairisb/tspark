import appDataSource from '../config/app-data-source';
import User from '../models/user.model';

const userRepository = appDataSource.getRepository(User);

const getAll = async () => {
  return userRepository.find();
};

const UserService = {
  getAll,
};

export default UserService;
