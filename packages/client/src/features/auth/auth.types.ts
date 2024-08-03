import { UserDto } from '@tspark/common';

export interface AuthState {
  isLoggedIn: boolean;
  user: UserDto | null;
}
