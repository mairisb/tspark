import { CardDto } from '@tspark/common';
import { cardRepository } from './card.repository';
import { Card } from './card.entity';

export class CardService {
  getAll = () => {
    return cardRepository.find();
  };

  save = (cardDto: CardDto) => {
    const card = new Card();
    card.name = cardDto.name;
    return cardRepository.save(card);
  };
}
