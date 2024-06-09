import { User } from './user.entity';

export interface IUserService {
  getAll(): Promise<User[]>;
  get(id: number): Promise<User>;
  getByEmail(email: string): Promise<User>;
  existsByEmail(email: string): Promise<boolean>;
}
