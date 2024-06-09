import { GameDto } from '@tspark/common';
import { Request, Response } from 'express';
import { GameServiceMock } from './game.service.mock';
import { controller, httpGet } from 'inversify-express-utils';

@controller('/game')
export class GameController {
  private gameService = new GameServiceMock();

  @httpGet('/all')
  async getAll(_req: Request, res: Response<GameDto[]>) {
    const games = await this.gameService.getAll();
    return res.json(games);
  }
}
