import { UserDto } from '@thegame/common';
import { Request, Response } from 'express';
import UserService from '../services/user.service';

const getAll = (_: Request, response: Response<UserDto[]>) => {
  UserService.getAll().then((users) => {
    response.json(users);
  });
};

const UserController = {
  getAll,
};

export default UserController;
