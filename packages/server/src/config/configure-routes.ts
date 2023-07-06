import { Application } from 'express';
import userRouter from '../routers/user.router';
import gameRouter from '../routers/game.router';

const configureRoutes = (app: Application) => {
  app.use('/api/users', userRouter);
  app.use('/api/games', gameRouter);
};

export default configureRoutes;
