import { DataSource } from 'typeorm';
import User from '../models/user.model';

const appDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [User],
  synchronize: true,
  logging: false,
});

export default appDataSource;
