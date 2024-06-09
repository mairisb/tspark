import { DataSource } from 'typeorm';
import { Game } from '../features/game/game.entity';
import { User } from '../features/user/user.entity';
import { Auth } from '../features/auth/auth.entity';
import { Card } from '../features/card/card.entity';

export const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User, Auth, Game, Card],
  synchronize: true,
  logging: false,
});
