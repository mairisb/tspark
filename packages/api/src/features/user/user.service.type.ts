import { User } from './user.entity';

export interface IUserService {
  getAll(): Promise<User[]>;
  get(id: string): Promise<User>;
  getByEmail(email: string): Promise<User | null>;
  getByEmailWithAuth(email: string): Promise<User>;
  existsByEmail(email: string): Promise<boolean>;
  save(user: User): Promise<User>;
}
