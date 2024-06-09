import 'dotenv/config';
import 'reflect-metadata';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import { appDataSource } from './core/app-data-source';
import { config } from './core/config';
import { container } from './core/inversify.config';
import { apiRouter } from './core/api.router';

const port = config.PORT;

const server = new InversifyExpressServer(container, null, {
  rootPath: '/api',
});

server.setConfig((app) => {
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
  app.use('/api', apiRouter); // legacy routes
});

const app = server.build();

appDataSource
  .initialize()
  .then(() => {
    const serverInstance = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    serverInstance.on('error', console.error);
  })
  .catch((error) => console.error('Database connection error: ', error));
