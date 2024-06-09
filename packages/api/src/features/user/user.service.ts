import { userRepository } from './user.repository';

export class UserService {
  getAll = () => {
    return userRepository.find();
  };

  get = (id: number) => {
    return userRepository.findOneOrFail({ where: { id } });
  };

  getByEmail = (email: string) => {
    return userRepository.findOneOrFail({ where: { email } });
  };

  existsByEmail = (email: string) => {
    return userRepository.exist({ where: { email } });
  };
}
