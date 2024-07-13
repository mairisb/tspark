import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestParam,
} from 'inversify-express-utils';
import { Middleware, Services } from '../../core/inversify.identifiers';
import { ICardService } from './card.service.type';

@controller('/card', Middleware.Auth)
export class CardController extends BaseHttpController {
  constructor(@inject(Services.Card) private cardService: ICardService) {
    super();
  }

  @httpGet('/:id')
  async index(@requestParam('id') id: number) {
    const cards = await this.cardService.getById(id);
    return this.json(cards);
  }

  @httpGet('/')
  async list() {
    const cards = await this.cardService.getAll();
    return this.json(cards);
  }

  @httpPost('/')
  async create() {
    try {
      await this.cardService.save(this.httpContext.request.body);
      return this.ok();
    } catch (e) {
      return this.json({ error: 'User creation failed' }, 500);
    }
  }
}
