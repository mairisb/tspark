import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata'; // needed for TypeORM
import appDataSource from './config/app-data-source';
import configureRoutes from './config/configure-routes';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.json());
app.use(cookieParser());

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
