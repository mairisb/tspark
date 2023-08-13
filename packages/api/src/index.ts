import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'reflect-metadata'; // needed for TypeORM
import { apiRouter } from './core/api.router';
import { appDataSource } from './core/app-data-source';
import { config } from './core/config';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:4200', 'http://192.168.0.4:4200'],
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', apiRouter);

const port = config.PORT;

appDataSource
  .initialize()
  .then(() => {
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);
  })
  .catch((error) => console.error('Database connection error: ', error));
