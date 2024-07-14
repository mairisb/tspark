import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
} from 'inversify-express-utils';
import { Services } from '../../core/inversify/identifiers';
import { IGameService } from './game.service.type';

@controller('/game')
export class GameController extends BaseHttpController {
  constructor(@inject(Services.Game) private gameService: IGameService) {
    super();
  }

  @httpGet('/')
  async getAll() {
    const games = await this.gameService.findAll();
    return this.json(games);
  }
}
