import express from 'express';
import { CardController } from './card.controller';

export const cardRouter = express.Router();

const cardController = new CardController();

cardRouter.get('/', cardController.getAll);
cardRouter.post('/', cardController.create);
