import { UserDto } from '@jspark/common';

export default interface GlobalState {
  isLoggedIn: boolean;
  user?: UserDto;
}
