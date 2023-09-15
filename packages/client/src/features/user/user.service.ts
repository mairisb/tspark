import { UserDto } from '@tspark/common';
import { axiosInstance } from '../../core/api/axios.instance';

const getAll = (): Promise<UserDto[]> => {
  return axiosInstance
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
