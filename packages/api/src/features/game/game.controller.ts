import { GameDto } from '@tspark/common';
import { Request, Response } from 'express';
import { GameServiceMock } from './game.service.mock';

export class GameController {
  private gameService = new GameServiceMock();

  getAll = async (_req: Request, res: Response<GameDto[]>) => {
    const games = await this.gameService.getAll();
    return res.json(games);
  };
}
