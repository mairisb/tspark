import { GameDto } from '@thegame/common';
import { Request, Response } from 'express';
import gameServiceMock from '../services/game.service.mock';

const getAll = (_: Request, response: Response<GameDto[]>) => {
  gameServiceMock.getAll().then((games) => {
    response.json(games);
  });
};

const gameController = {
  getAll,
};

export default gameController;
