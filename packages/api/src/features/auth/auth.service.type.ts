import { LoginRequest, RegisterRequest } from '@tspark/common';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../user/user.entity';

export interface IAuthService {
  login(loginRequest: LoginRequest): Promise<User>;
  register(registerRequest: RegisterRequest): Promise<User>;
  getUser(token: string): Promise<User | null>;
}
