import { DataSource } from 'typeorm';
import { Game } from '../features/game/game.model';
import { User } from '../features/user/user.model';
import { Auth } from '../features/auth/auth.model';

export const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User, Auth, Game],
  synchronize: true,
  logging: false,
});
