import { CardDto } from '@tspark/common';
import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  requestBody,
  requestParam,
  response,
} from 'inversify-express-utils';
import { mapper } from '../../core/auto-mapper/mapper';
import { BaseController } from '../../core/controller/base.controller';
import { Middleware, Services } from '../../core/di/di.identifiers';
import { Card } from './card.entity';
import { ICardService } from './card.service.type';

@controller('/card', Middleware.Auth)
export class CardController extends BaseController {
  @inject(Services.Card)
  private cardService: ICardService;

  protected getService(): ICardService {
    return this.cardService;
  }

  @httpGet('')
  public async getAll(@response() res: Response<CardDto[]>) {
    const cards = await this.cardService.getAllForUser(
      this.principal.details.id,
    );
    const cardDtos = mapper.mapArray(cards, Card, CardDto);
    return res.status(200).json(cardDtos);
  }

  @httpPost('')
  public async create(
    @requestBody() cardDto: CardDto,
    @response() res: Response,
  ) {
    try {
      const card = mapper.map(cardDto, CardDto, Card);
      await this.cardService.createForUser(this.principal.details.id, card);
      return res.status(201).send();
    } catch (e) {
      console.error('Entity creation failed:', e);
      return res.status(400).json({ error: 'Entity creation failed' });
    }
  }

  @httpDelete('/:id')
  public async delete(
    @requestParam('id') id: string,
    @response() res: Response,
  ) {
    try {
      await this.cardService.deleteForUser(this.principal.details.id, id);
      return res.status(204).send();
    } catch (e) {
      console.error('Entity deletion failed:', e);
      return res.status(400).json({ error: 'Entity deletion failed' });
    }
  }
}
