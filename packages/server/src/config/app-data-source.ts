import { DataSource } from 'typeorm';
import { Game } from '../models/game.model';
import { User } from '../models/user.model';

export const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User, Game],
  synchronize: true,
  logging: false,
});
