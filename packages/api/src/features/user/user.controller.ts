import { UserDto } from '@tspark/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  private userService = new UserService();

  public getAll = async (_req: Request, res: Response<UserDto[]>) => {
    return this.userService.getAll().then((users) => {
      res.json(users);
    });
  };
}
