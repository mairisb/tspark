import express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { Person } from './Person';
import { AppDataSource } from './data-source';

const person = new Person();
person.name = 'me as a baby';

AppDataSource.initialize()
  .then(async () => {
    console.log('hello');
    await AppDataSource.manager.save(person);
    const allPersons = await AppDataSource.manager.find(Person);
    console.log('All persons from the db: ', allPersons);
  })
  .catch((error) => console.error(error));

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (_, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/all', async (_, res) => {
  const allPersons = await AppDataSource.manager.find(Person);
  res.send(allPersons);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
