import { injectable } from 'inversify';
import { appDataSource } from '../../core/db/app-data-source';
import { User } from './user.entity';
import { IUserRepository } from './user.repository.type';

export const userRepository = appDataSource.getRepository(User);

@injectable()
export class UserRepository implements IUserRepository {
  findAll() {
    return userRepository.find();
  }

  find(id: string) {
    return userRepository.findOneOrFail({ where: { id } });
  }

  findByEmail(email: string) {
    return userRepository.findOne({ where: { email } });
  }

  existsByEmail(email: string): Promise<boolean> {
    return userRepository.exist({ where: { email } });
  }
}
