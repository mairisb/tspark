import { CardDto } from '@tspark/common';
import { inject } from 'inversify';
import { controller } from 'inversify-express-utils';
import { CrudController } from '../../core/controllers/crud.controller';
import { Middleware, Services } from '../../core/di/di.identifiers';
import { ICardService } from './card.service.type';

@controller('/card', Middleware.Auth)
export class CardController extends CrudController<CardDto> {
  @inject(Services.Card)
  private cardService: ICardService;

  protected getService(): ICardService {
    return this.cardService;
  }
}
