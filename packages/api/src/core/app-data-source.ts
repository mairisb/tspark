import { DataSource } from 'typeorm';
import { Game } from '../features/game/game.entity';
import { User } from '../features/user/user.entity';
import { Auth } from '../features/auth/auth.entity';

export const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User, Auth, Game],
  synchronize: true,
  logging: false,
});
