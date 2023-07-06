import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata'; // needed for TypeORM
import appDataSource from './config/app-data-source';
import configureRoutes from './config/configure-routes';

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

configureRoutes(app);

const port = process.env.PORT || 3333;

appDataSource
  .initialize()
  .then(() => {
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);
  })
  .catch((error) => console.error('Database connection error: ', error));
