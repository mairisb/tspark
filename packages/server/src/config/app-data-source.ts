import { DataSource } from 'typeorm';
import User from '../models/user.model';
import Game from '../models/game.model';

const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User, Game],
  synchronize: true,
  logging: false,
});

export default appDataSource;
