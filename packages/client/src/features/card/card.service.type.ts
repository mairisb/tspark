import { CardDto } from '@tspark/common';

export interface ICardService {
  getAll(): Promise<CardDto[]>;
  create(card: CardDto): Promise<void>;
}
