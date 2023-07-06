import { Application } from 'express';
import UserRouter from '../routers/user.router';

const configureRoutes = (app: Application) => {
  app.use('/api/users', UserRouter);
};

export default configureRoutes;
