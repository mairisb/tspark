import { inject, injectable } from 'inversify';
import { Repository } from '../../core/di/di.identifiers';
import { IUserRepository } from './user.repository.type';
import { IUserService } from './user.service.type';
import { User } from './user.entity';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(Repository.User) private readonly userRepository: IUserRepository,
  ) {}

  getAll() {
    return this.userRepository.findAll();
  }

  get(id: string) {
    return this.userRepository.find(id);
  }

  getByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  getByEmailWithAuth(email: string) {
    return this.userRepository.findByEmailWithAuth(email);
  }

  existsByEmail(email: string) {
    return this.userRepository.existsByEmail(email);
  }

  save(user: User) {
    return this.userRepository.save(user);
  }
}
