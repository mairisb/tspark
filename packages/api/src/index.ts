import 'dotenv/config';
import 'reflect-metadata';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { createMaps } from './core/auto-mapper/mapper';
import { config } from './core/config/config';
import { appDataSource } from './core/db/app-data-source';
import { configFunction } from './core/inversify/config-function';
import { container } from './core/inversify/container';
import { errorConfigFunction } from './core/inversify/error-config-function';
import { AuthProvider } from './features/auth/auth.provider';

createMaps();

const port = config.port;
const rootPath = '/api';

const app = express();
app.use(
  cors({
    origin: [
      'http://localhost:4200',
      'http://localhost:8080',
      'http://192.168.0.4:4200',
      'http://192.168.0.4:8080',
      'https://192.168.0.4:8443',
      'http://host.docker.internal:8080',
      'https://host.docker.internal:8443',
    ],
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());

const server = new InversifyExpressServer(
  container,
  null,
  {
    rootPath: rootPath,
  },
  app,
  AuthProvider,
);

server.setConfig(configFunction);
server.setErrorConfig(errorConfigFunction);

appDataSource
  .initialize()
  .then(() => {
    const serverInstance = server.build().listen(port, () => {
      console.log(`Listening at http://localhost:${port}${rootPath}`);
    });
    serverInstance.on('error', console.error);
  })
  .catch((error) => console.error('Database connection error: ', error));
