import { injectable } from 'inversify';
import { userRepository } from './user.repository';
import { IUserService } from './user.service.type';

@injectable()
export class UserService implements IUserService {
  getAll() {
    return userRepository.find();
  }

  get(id: number) {
    return userRepository.findOneOrFail({ where: { id } });
  }

  getByEmail(email: string) {
    return userRepository.findOne({ where: { email } });
  }

  existsByEmail(email: string) {
    return userRepository.exist({ where: { email } });
  }
}
