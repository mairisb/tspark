import { GameDto } from '@tspark/common';
import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { IGameService } from './game.service.type';

@controller('/game')
export class GameController {
  constructor(@inject('IGameService') private gameService: IGameService) {}

  @httpGet('/all')
  async getAll(_req: Request, res: Response<GameDto[]>) {
    const games = await this.gameService.findAll();
    return res.json(games);
  }
}
