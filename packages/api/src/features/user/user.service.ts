import { userRepository } from './user.repository';

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

export const userService = {
  getAll,
  get,
  getByEmail,
  existsByEmail,
};
