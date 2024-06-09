import { CardDto, ErrorResponse } from '@tspark/common';
import { Request, Response } from 'express';
import { CardService } from './card.service';

export class CardController {
  private cardService = new CardService();

  public getAll = async (_req: Request, res: Response<CardDto[]>) => {
    const cards = await this.cardService.getAll();
    return res.status(200).json(cards);
  };

  public create = async (
    req: Request<CardDto>,
    res: Response<CardDto | ErrorResponse>,
  ) => {
    try {
      await this.cardService.save(req.body);
      return res.status(200).send();
    } catch (e) {
      return res.status(500).json({ error: 'User creation failed' });
    }
  };
}
