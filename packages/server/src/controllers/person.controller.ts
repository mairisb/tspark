import { Request, Response } from 'express';
import PersonService from '../services/person.service';

const getAll = async (_: Request, response: Response) => {
  PersonService.getAll().then((persons) => {
    response.json(persons);
  });
};

const PersonController = {
  getAll,
};

export default PersonController;
