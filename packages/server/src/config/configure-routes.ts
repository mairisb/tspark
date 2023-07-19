import { Application } from 'express';
import authRouter from '../routers/auth.router';
import gameRouter from '../routers/game.router';
import userRouter from '../routers/user.router';

const configureRoutes = (app: Application) => {
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/games', gameRouter);
};

export default configureRoutes;
