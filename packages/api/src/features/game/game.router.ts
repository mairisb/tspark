import express from 'express';
import { GameController } from './game.controller';

export const gameRouter = express.Router();

const gameController = new GameController();

gameRouter.get('/', gameController.getAll);
