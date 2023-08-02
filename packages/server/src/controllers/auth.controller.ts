import { GenericResponse, LoginRequest, RegisterRequest } from '@jspark/common';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { authService } from '../services/auth.service';
import { userService } from '../services/user.service';

const register = (
  request: Request<RegisterRequest>,
  response: Response<GenericResponse>
) => {
  const registerRequest = request.body;

  userService
    .existsByEmail(registerRequest.email)
    .then((userExists) => {
      if (userExists) {
        throw new Error('User already exists.');
      }
    })
    .then(() =>
      authService.register({
        email: registerRequest.email,
        password: registerRequest.password,
      })
    )
    .then(() => {
      response.status(200).json({ message: 'Registration successful.' });
    })
    .catch((error) => {
      console.error('Registration failed.', error);
      response.status(500).json({ message: 'Registration failed.' });
    });
};

const login = (
  request: Request<LoginRequest>,
  response: Response<GenericResponse>
) => {
  const loginRequest = request.body;
  authService
    .login({
      email: loginRequest.email,
      password: loginRequest.password,
    })
    .then(() =>
      jwt.sign(
        {
          email: loginRequest.email,
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

const logout = (_: Request, response: Response<GenericResponse>) => {
  response
    .clearCookie('token', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .json({ message: 'Logout successful.' });
};

export const authController = {
  register,
  login,
  logout,
};
