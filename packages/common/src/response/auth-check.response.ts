import { UserDto } from '../dtos';

export interface AuthCheckResponse {
  isAuthenticated: boolean;
  user?: UserDto;
  error?: string;
}
