import { ErrorResponse } from '@tspark/common';
import { NextFunction, Request, Response } from 'express';
import { ConfigFunction } from 'inversify-express-utils';

export const errorConfigFunction: ConfigFunction = (app) => {
  app.use(
    (
      err: Error,
      req: Request,
      res: Response<ErrorResponse>,
      next: NextFunction,
    ) => {
      console.error('Something went wrong!', err.stack);
      return res.status(500).json({ error: 'Something went wrong!' });
    },
  );
};
