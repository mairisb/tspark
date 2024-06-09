import { LoginRequest, RegisterRequest } from '@tspark/common';
import { User } from '../user/user.entity';

export interface IAuthService {
  register(registerRequest: RegisterRequest): Promise<User>;
  login(loginRequest: LoginRequest): Promise<User>;
}
