import { UserDto } from '@jspark/common';

export interface GlobalState {
  isLoggedIn: boolean;
  user?: UserDto;
}
