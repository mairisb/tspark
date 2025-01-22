import { CardDto } from '@tspark/common';
import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { mapper } from '../../core/auto-mapper/mapper';
import { CrudService } from '../../core/services/crud.service';
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

  async findAllByUserId(userId: number) {
    const entities = await this.repository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });

    const entityDtos = mapper.mapArray(entities, Card, CardDto);

    return entityDtos;
  }

  async deleteByIdAndUserId(cardId: number, userId: number) {
    const card = this.repository.findOne({
      where: {
        id: cardId,
        user: {
          id: userId,
        },
      },
    });

    if (!card) {
      throw new Error(
        `Cannot delete card. Card with ID '${cardId}' not found or does not belong to the user with ID '${userId}'`,
      );
    }

    this.repository.delete(cardId);
  }
}
