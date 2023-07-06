import express from 'express';
import PersonController from '../controllers/person.controller';

const PersonRouter = express.Router();

PersonRouter.get('/', PersonController.getAll);

export default PersonRouter;
