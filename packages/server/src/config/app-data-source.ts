import { DataSource } from 'typeorm';
import Person from '../models/person.model';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'sqlite.db',
  entities: [Person],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
