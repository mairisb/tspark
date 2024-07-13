import { CardDto } from '@tspark/common';

export interface ICardClient {
  getAll(): Promise<CardDto[]>;
  create(card: CardDto): Promise<void>;
}
