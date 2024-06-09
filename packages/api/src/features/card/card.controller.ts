import { CardDto, ErrorResponse } from '@tspark/common';
import { Request, Response } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { CardService } from './card.service';
import { authMiddleware } from '../auth/auth.middleware';

@controller('/card', authMiddleware.isAuthenticated)
export class CardController {
  private cardService = new CardService();

  @httpGet('/')
  public async getAll(_req: Request, res: Response<CardDto[]>) {
    const cards = await this.cardService.getAll();
    return res.status(200).json(cards);
  }

  @httpPost('/')
  public async create(
    req: Request<CardDto>,
    res: Response<CardDto | ErrorResponse>,
  ) {
    try {
      await this.cardService.save(req.body);
      return res.status(200).send();
    } catch (e) {
      return res.status(500).json({ error: 'User creation failed' });
    }
  }
}
