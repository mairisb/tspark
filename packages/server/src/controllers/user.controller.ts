import { UserDto } from '@jspark/common';
import { Request, Response } from 'express';
import { userService } from '../services/user.service';

const getAll = (_: Request, response: Response<UserDto[]>) => {
  userService.getAll().then((users) => {
    response.json(users);
  });
};

export const userController = {
  getAll,
};
