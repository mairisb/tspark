import { Request, Response } from 'express';
import authService, { UserInfo } from '../services/auth.service';
import userService from '../services/user.service';

const register = (request: Request<UserInfo>, response: Response) => {
  userService
    .existsByEmail(request.body.email)
    .then((userExists) => {
      if (userExists) {
        throw new Error('User already exists.');
      }
    })
    .then(() => authService.register(request.body))
    .then(() => {
      response.status(200).json({ message: 'Registration successful.' });
    })
    .catch((error) => {
      response.status(500).json({ message: 'Registration failed.' });
      console.error('Registration failed.', error);
    });
};

const authController = {
  register,
};

export default authController;
