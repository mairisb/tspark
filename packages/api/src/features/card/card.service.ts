import { CardDto } from '@tspark/common';
import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { CrudService } from '../../core/crud.service';
import { Card } from './card.entity';
import { cardRepository } from './card.repository';
import { ICardService } from './card.service.type';

@injectable()
export class CardService
  extends CrudService<Card, CardDto>
  implements ICardService
{
  repository: Repository<Card> = cardRepository;

  protected getEntityClass(): new () => Card {
    return Card;
  }

  protected getEntityDtoClass(): new () => CardDto {
    return CardDto;
  }
}
