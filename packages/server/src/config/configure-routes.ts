import { Application } from 'express';
import { PersonRouter } from '../routers/person.router';

const configureRoutes = (app: Application) => {
  app.use('/api/persons', PersonRouter);
};

export default configureRoutes;
