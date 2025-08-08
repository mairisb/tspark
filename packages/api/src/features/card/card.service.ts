import { CardDto } from '@tspark/common';
import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { mapper } from '../../core/auto-mapper/mapper';
import { Card } from './card.entity';
import { cardRepository } from './card.repository';
import { ICardService } from './card.service.type';

@injectable()
export class CardService implements ICardService {
  repository: Repository<Card> = cardRepository;

  async find(id: string) {
    const entity = await this.repository.findOneBy({
      id,
    });

    if (!entity) {
      return null;
    }

    const entityDto = mapper.map(entity, Card, CardDto);

    return entityDto;
  }

  async findAll() {
    const entities = await this.repository.find();

    const entityDtos = mapper.mapArray(entities, Card, CardDto);

    return entityDtos;
  }

  create(entityDto: CardDto) {
    const entity = mapper.map(entityDto, CardDto, Card);

    return this.repository.insert(entity);
  }

  update(id: string, entityDto: CardDto) {
    const entity = mapper.map(entityDto, CardDto, Card);

    return this.repository.update(id, entity);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }

  async findAllByUserId(userId: string) {
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

  async deleteByIdAndUserId(cardId: string, userId: string) {
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
