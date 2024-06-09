import { CardDto } from '@tspark/common';
import { Request } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import { authMiddleware } from '../auth/auth.middleware';
import { ICardService } from './card.service.type';

@controller('/card', authMiddleware.isAuthenticated)
export class CardController extends BaseHttpController {
  constructor(@inject('ICardService') private cardService: ICardService) {
    super();
  }

  @httpGet('/')
  public async getAll() {
    const cards = await this.cardService.getAll();
    return this.json(cards);
  }

  @httpPost('/')
  public async create(req: Request<CardDto>) {
    try {
      await this.cardService.save(req.body);
      return this.ok();
    } catch (e) {
      return this.json({ error: 'User creation failed' }, 500);
    }
  }
}
