import express from 'express';
import { gameController } from './game.controller';

export const gameRouter = express.Router();

gameRouter.get('/', gameController.getAll);
