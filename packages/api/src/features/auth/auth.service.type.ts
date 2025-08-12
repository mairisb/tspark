import { LoginRequest, RegisterRequest } from '@tspark/common';
import { User } from '../user/user.entity';

export interface IAuthService {
  issueAccessToken(userId: string): string;
  login(loginRequest: LoginRequest): Promise<User>;
  register(registerRequest: RegisterRequest): Promise<User>;
  getUser(token: string): Promise<User | null>;
}
