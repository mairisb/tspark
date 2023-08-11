import { UserDto } from '@tspark/common';
import { Request, Response } from 'express';
import { userService } from './user.service';

const getAll = (_req: Request, res: Response<UserDto[]>) => {
  return userService.getAll().then((users) => {
    res.json(users);
  });
};

export const userController = {
  getAll,
};
