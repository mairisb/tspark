import { UserDto } from '@jspark/common';

export interface AuthState {
  isLoggedIn: boolean;
}

export interface UserState {
  user: UserDto;
}

export interface RootState {
  auth: AuthState;
  user: UserState;
}
