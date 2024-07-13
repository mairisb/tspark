import { CardDto } from '@tspark/common';

export interface ICardService {
  getById(id: number): Promise<CardDto | null>;
  getAll(): Promise<CardDto[]>;
  save(cardDto: CardDto): Promise<CardDto>;
}
