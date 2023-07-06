import { Request, Response } from 'express';
import UserService from '../services/user.service';

const getAll = async (_: Request, response: Response) => {
  UserService.getAll().then((users) => {
    response.json(users);
  });
};

const UserController = {
  getAll,
};

export default UserController;
