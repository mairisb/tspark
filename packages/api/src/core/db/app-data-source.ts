import { DataSource } from 'typeorm';
import { User } from '../../features/user/user.entity';
import { Auth } from '../../features/auth/auth.entity';
import { Card } from '../../features/card/card.entity';

export const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User, Auth, Card],
  synchronize: true,
  logging: false,
});
