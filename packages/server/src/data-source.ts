import { DataSource } from 'typeorm';
import { Person } from './Person';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [Person],
  synchronize: true,
  logging: false,
});
