import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import appDataSource from './config/app-data-source';
import configureRoutes from './config/configure-routes';
import { Game } from './game';

const games: Game[] = [
  { name: 'Room1', players: 3 },
  { name: 'Room2', players: 2 },
  { name: 'Room3', players: 6 },
];

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (_, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/games', async (_, res) => {
  res.send(games);
});

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
