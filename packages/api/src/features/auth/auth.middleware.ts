import { ErrorResponse } from '@tspark/common';
import { NextFunction, Request, Response } from 'express';
import { BaseMiddleware } from 'inversify-express-utils';

export class AuthMiddleware extends BaseMiddleware {
  async handler(_req: Request, res: Response, next: NextFunction) {
    const isAuthenticated = await this.httpContext.user.isAuthenticated();

    if (!isAuthenticated) {
      return res.status(401).json({
        error: 'User is not authenticated',
      } as ErrorResponse);
    }

    return next();
  }
}
