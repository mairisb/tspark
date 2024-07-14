import { CardDto } from '@tspark/common';
import { cardRepository } from './card.repository';
import { Card } from './card.entity';
import { injectable } from 'inversify';
import { ICardService } from './card.service.type';
import { mapper } from '../../core/mapper';

@injectable()
export class CardService implements ICardService {
  getById(id: number) {
    return cardRepository.findOneBy({ id });
  }

  getAll() {
    return cardRepository.find();
  }

  save(cardDto: CardDto) {
    const card = mapper.map(cardDto, CardDto, Card);

    return cardRepository.save(card);
  }
}
