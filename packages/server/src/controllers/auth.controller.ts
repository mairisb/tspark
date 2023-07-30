import { RegisterRequest } from '@jspark/common';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authService, { UserInfo } from '../services/auth.service';
import userService from '../services/user.service';

const register = (request: Request<RegisterRequest>, response: Response) => {
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
      console.error('Registration failed.', error);
      response.status(500).json({ message: 'Registration failed.' });
    });
};

const login = (request: Request<UserInfo>, response: Response) => {
  authService
    .login(request.body)
    .then(() =>
      jwt.sign(
        {
          email: request.body.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )
    )
    .then((token) => {
      response
        .cookie('token', token, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
          maxAge: 3600000,
        })
        .status(200)
        .json({ message: 'Login successful.' });
    })
    .catch((error) => {
      console.error('Login failed.', error);
      response.status(500).json({ message: 'Login failed.' });
    });
};

const logout = (_: Request, response: Response) => {
  response
    .cookie('token', '', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: -1,
    })
    .status(200)
    .json({ message: 'Logout successful' });
};

const authController = {
  register,
  login,
  logout,
};

export default authController;
