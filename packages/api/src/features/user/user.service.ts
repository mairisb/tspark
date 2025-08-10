import { inject, injectable } from 'inversify';
import { Repository } from '../../core/di/di.identifiers';
import { IUserRepository } from './user.repository.type';
import { IUserService } from './user.service.type';

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

  existsByEmail(email: string) {
    return this.userRepository.existsByEmail(email);
  }
}
