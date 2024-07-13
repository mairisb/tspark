import { CardDto } from '@tspark/common';

export interface ICardStore {
  cards: CardDto[];

  fetchAll(): Promise<void>;
  create(cardDto: CardDto): Promise<void>;
}
