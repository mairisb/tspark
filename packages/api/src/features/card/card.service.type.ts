import { CardDto } from '@tspark/common';
import { Card } from './card.entity';

export interface ICardService {
  getAll(): Promise<Card[]>;
  save(cardDto: CardDto): Promise<Card>;
}
