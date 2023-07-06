import { AppDataSource } from '../config/app-data-source';
import { Person } from '../models/person.model';

const getAll = async () => {
  return AppDataSource.manager.find(Person);
};

export const PersonService = {
  getAll,
};
