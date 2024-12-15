import { CardDto } from '@tspark/common';
import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  requestBody,
  response,
} from 'inversify-express-utils';
import { BaseController } from '../../core/controllers/base.controller';
import { Middleware, Services } from '../../core/di/di.identifiers';
import { ICardService } from './card.service.type';

@controller('/card', Middleware.Auth)
export class CardController extends BaseController {
  @inject(Services.Card)
  private cardService: ICardService;

  protected getService(): ICardService {
    return this.cardService;
  }

  @httpGet('/')
  protected async getAll(@response() res: Response<CardDto[]>) {
    const entities = await this.cardService.findAllByUserId(
      this.principal.details.id,
    );
    return res.status(200).json(entities);
  }

  @httpPost('/')
  public async create(
    @requestBody() cardDto: CardDto,
    @response() res: Response,
  ) {
    try {
      cardDto.user = this.httpContext.user.details;
      await this.cardService.create(cardDto);
      return res.status(200).send();
    } catch (e) {
      console.error('Entity creation failed:', e);
      return res.status(400).json({ error: 'Entity creation failed' });
    }
  }
}
