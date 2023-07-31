import { UserDto } from '@jspark/common';
import { api } from './api';

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
