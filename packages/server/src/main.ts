import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { AppDataSource } from './config/app-data-source';
import { Game } from './game';
import { Person } from './models/person';

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

app.get('/all', async (_, res) => {
  const allPersons = await AppDataSource.manager.find(Person);
  res.send(allPersons);
});

app.get('/games', async (_, res) => {
  res.send(games);
});

const port = process.env.PORT || 3333;

AppDataSource.initialize()
  .then(() => {
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);
  })
  .catch((error) => console.error('Database connection erro: ', error));
