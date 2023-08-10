import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import 'reflect-metadata'; // needed for TypeORM
import { appDataSource } from './config/app-data-source';
import { apiRouter } from './routers/api.router';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:4200', 'http://192.168.0.4:4200'],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', apiRouter);

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
