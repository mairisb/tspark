import { UserDto } from '@tspark/common';
import { User } from './user.entity';

export const mapUserToUserDto = (user: User): UserDto => ({
  id: user.id,
  username: user.username,
  email: user.email,
});
