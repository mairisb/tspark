import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
} from 'inversify-express-utils';
import { IGameService } from './game.service.type';

@controller('/game')
export class GameController extends BaseHttpController {
  constructor(@inject('IGameService') private gameService: IGameService) {
    super();
  }

  @httpGet('/')
  async getAll() {
    const games = await this.gameService.findAll();
    return this.json(games);
  }
}
