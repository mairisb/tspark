import { UserDto } from '@jspark/common';

export interface AuthState {
  isLoggedIn: boolean;
  user: UserDto | null;
  loading: boolean;
  error: string | null;
}
