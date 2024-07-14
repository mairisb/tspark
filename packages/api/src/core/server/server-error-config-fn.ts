import { ErrorResponse } from '@tspark/common';
import { NextFunction, Request, Response } from 'express';
import { ConfigFunction } from 'inversify-express-utils';

export const serverErorConfigFn: ConfigFunction = (app) => {
  app.use(
    (
      err: Error,
      req: Request,
      res: Response<ErrorResponse>,
      next: NextFunction,
    ) => {
      console.error('Oops! Something went wrong.', err);
      return res.status(500).json({ error: 'Oops! Something went wrong.' });
    },
  );
};
