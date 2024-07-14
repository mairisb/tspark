import { CardDto, ErrorResponse } from '@tspark/common';
import { Response } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
  requestParam,
  response,
} from 'inversify-express-utils';
import { Middleware, Services } from '../../core/di/di.identifiers';
import { ICardService } from './card.service.type';

@controller('/card', Middleware.Auth)
export class CardController extends BaseHttpController {
  constructor(@inject(Services.Card) private cardService: ICardService) {
    super();
  }

  @httpGet('/:id')
  async index(
    @requestParam('id') id: number,
    @response() res: Response<CardDto | null | ErrorResponse>,
  ) {
    const card = await this.cardService.find(id);

    if (!card) {
      return res.status(404).json({
        error: `No card found with id: ${id}`,
      });
    }

    return res.status(200).json(card);
  }

  @httpGet('/')
  async list(@response() res: Response<CardDto[]>) {
    const cards = await this.cardService.findAll();
    return res.status(200).json(cards);
  }

  @httpPost('/')
  async create(@requestBody() cardDto: CardDto, @response() res: Response) {
    try {
      await this.cardService.create(cardDto);
      return res.status(200).send();
    } catch (e) {
      console.error('Card creation failed:', e);
      return res.status(400).json({ error: 'Card creation failed' });
    }
  }

  @httpPut('/:id')
  async update(
    @requestParam('id') id: number,
    @requestBody() cardDto: CardDto,
    @response() res: Response<ErrorResponse>,
  ) {
    try {
      const updateResult = await this.cardService.update(id, cardDto);

      if (!updateResult.affected) {
        console.error(`Card update failed. No card found with id: ${id}`);
        return res.status(404).json({
          error: `Card update failed. No card found with id: ${id}`,
        });
      }

      return res.status(200).send();
    } catch (e) {
      console.error('Card update failed:', e);
      return res.status(400).json({ error: 'Card update failed' });
    }
  }

  @httpDelete('/:id')
  async delete(
    @requestParam('id') id: number,
    @response() res: Response<ErrorResponse>,
  ) {
    try {
      const deleteResult = await this.cardService.delete(id);

      if (!deleteResult.affected) {
        console.error(`Card delete failed. No card found with id: ${id}`);
        return res.status(404).json({
          error: `Card delete failed. No card found with id: ${id}`,
        });
      }

      return res.status(200).send();
    } catch (e) {
      console.error('Card delete failed:', e);
      return res.status(400).json({ error: 'Card delete failed' });
    }
  }
}
