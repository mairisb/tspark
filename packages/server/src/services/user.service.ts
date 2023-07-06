import appDataSource from '../config/app-data-source';
import User from '../models/user.model';

const getAll = async () => {
  return appDataSource.manager.find(User);
};

const UserService = {
  getAll,
};

export default UserService;
