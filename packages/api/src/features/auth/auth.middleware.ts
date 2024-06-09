import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../core/config';

const clearJwtCookie = (res: Response) => {
  res.clearCookie('login_token', {
    sameSite: 'none',
    secure: true,
  });
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
      clearJwtCookie(res);
      return res.status(401).json({
        isAuthenticated: false,
        error: 'Invalid authentication token.',
      });
    }

    const decodedToken = jwt.decode(token, { json: true });
    if (!decodedToken?.sub) {
      throw new Error('User information not found in token');
    }

    return next();
  } catch (err) {
    console.error('Auth check failed:', err);
    clearJwtCookie(res);
    return res.status(500).json({
      isAuthenticated: false,
      error: 'Auth check failed.',
    });
  }
};

export const authMiddleware = {
  isAuthenticated,
};
