import { UserDto } from '@tspark/common';
import { apiClient } from '../../core/api/api.client';

const getAll = (): Promise<UserDto[]> => {
  return apiClient
    .get('users')
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const userClient = {
  getAll,
};
