import {
  AuthCheckResponse,
  ErrorResponse,
  GenericResponse,
  LoginRequest,
  RegisterRequest,
  UserDto,
} from '@tspark/common';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../core/config';
import { mapUserToUserDto } from '../user/user.dto.mapper';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

export class AuthController {
  private authService = new AuthService();
  private userService = new UserService();

  public register = async (
    req: Request<null, null, RegisterRequest>,
    res: Response<UserDto | ErrorResponse>,
  ) => {
    const registerRequest = req.body;

    try {
      const user = await this.authService.register(registerRequest);

      const userDto = mapUserToUserDto(user);

      this.setJwtCookie(res, userDto);
      return res.status(200).json(userDto);
    } catch (err) {
      console.error('Registration failed.', err);
      return res.status(500).json({ error: 'Registration failed.' });
    }
  };

  public login = async (
    req: Request<null, null, LoginRequest>,
    res: Response<UserDto | ErrorResponse>,
  ) => {
    const loginRequest = req.body;

    try {
      const user = await this.authService.login(loginRequest);

      const userDto = mapUserToUserDto(user);

      this.setJwtCookie(res, userDto);
      return res.status(200).json(userDto);
    } catch (err) {
      console.log('Login failed.', err);
      return res.status(500).json({ error: 'Login failed.' });
    }
  };

  public logout = (_req: Request, res: Response<GenericResponse>) => {
    this.clearJwtCookie(res);
    return res.status(200).json({ message: 'Logout successful.' });
  };

  public authCheck = async (req: Request, res: Response<AuthCheckResponse>) => {
    const token = req.cookies.login_token;
    if (!token) {
      return res.status(401).json({
        isAuthenticated: false,
        error: 'No authentication token provided.',
      });
    }

    try {
      const isTokenValid = jwt.verify(token, config.JWT_SECRET);
      if (!isTokenValid) {
        this.clearJwtCookie(res);
        return res.status(401).json({
          isAuthenticated: false,
          error: 'Invalid authentication token.',
        });
      }

      const decodedToken = jwt.decode(token, { json: true });
      if (!decodedToken?.sub) {
        throw new Error('User information not found in token');
      }

      const email = decodedToken.sub;
      const user = await this.userService.getByEmail(email);
      const userDto = mapUserToUserDto(user);

      return res.status(200).json({ isAuthenticated: true, user: userDto });
    } catch (err) {
      console.error('Auth check failed:', err);
      this.clearJwtCookie(res);
      return res.status(500).json({
        isAuthenticated: false,
        error: 'Auth check failed.',
      });
    }
  };

  private setJwtCookie = (res: Response, userDto: UserDto) => {
    const token = jwt.sign({ sub: userDto.email }, config.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.cookie('login_token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 3600000,
    });
  };

  private clearJwtCookie = (res: Response) => {
    res.clearCookie('login_token', {
      sameSite: 'none',
      secure: true,
    });
  };
}
