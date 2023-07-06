import { UserDto } from '@thegame/common';
import axios from 'axios';

const getAll = (): Promise<UserDto[]> => {
  return axios
    .get('http://localhost:3333/api/users')
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

const userService = {
  getAll,
};

export default userService;
