import { UserDto } from '@tspark/common';
import { api } from '../../core/api';

const getAll = (): Promise<UserDto[]> => {
  return api
    .get('users')
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const userService = {
  getAll,
};
