import express from 'express';
import gameController from '../controllers/game.controller';

const gameRouter = express.Router();

gameRouter.get('/', gameController.getAll);

export default gameRouter;
