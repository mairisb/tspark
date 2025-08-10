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

  async findByEmailWithAuth(email: string) {
    return userRepository.findOneOrFail({
      where: { email },
      relations: { auth: true },
    });
  }

  existsByEmail(email: string) {
    return userRepository.exist({ where: { email } });
  }

  save(user: User) {
    return userRepository.save(user);
  }
}
