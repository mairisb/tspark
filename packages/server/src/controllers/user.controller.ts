import { UserDto } from '@jspark/common';
import { Request, Response } from 'express';
import { userService } from '../services/user.service';

const getAll = (_req: Request, res: Response<UserDto[]>) => {
  return userService.getAll().then((users) => {
    res.json(users);
  });
};

export const userController = {
  getAll,
};
