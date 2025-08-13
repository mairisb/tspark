import 'dotenv/config';
import 'reflect-metadata';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { createMaps } from './core/auto-mapper/mapper';
import { config } from './core/config/config';
import { appDataSource } from './core/db/app-data-source';
import { container } from './core/di/di.container';
import { serverConfigFn } from './core/server/server-config-fn';
import { serverErorConfigFn } from './core/server/server-error-config-fn';
import { AuthProvider } from './features/auth/auth.provider';

createMaps();

const port = config.port;
const rootPath = '/api';

const app = express();
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

server.setConfig(serverConfigFn);
server.setErrorConfig(serverErorConfigFn);

appDataSource
  .initialize()
  .then(() => {
    const serverInstance = server.build().listen(port, () => {
      console.log(`Listening at http://localhost:${port}${rootPath}`);
    });
    serverInstance.on('error', console.error);
  })
  .catch((error) => console.error('Database connection error: ', error));
