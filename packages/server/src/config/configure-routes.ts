import express, { Application } from 'express';
import { authRouter } from '../routers/auth.router';
import { gameRouter } from '../routers/game.router';
import { userRouter } from '../routers/user.router';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/games', gameRouter);

export const configureRoutes = (app: Application) => {
  app.use('/api', mainRouter);
};
