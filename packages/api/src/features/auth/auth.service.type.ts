import { LoginRequest, RegisterRequest } from '@tspark/common';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../user/user.entity';

export interface IAuthService {
  decodeToken(token: string): JwtPayload | null;
  login(loginRequest: LoginRequest): Promise<User>;
  register(registerRequest: RegisterRequest): Promise<User>;
}
