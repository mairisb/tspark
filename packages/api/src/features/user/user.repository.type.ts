import { User } from './user.entity';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  find(id: string): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  existsByEmail(email: string): Promise<boolean>;
}
