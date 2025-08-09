import { Card } from './card.entity';

export interface ICardService {
  getAllForUser: (userId: string) => Promise<Card[]>;
  createForUser(userId: string, dto: Card): Promise<void>;
  deleteForUser: (userId: string, cardId: string) => Promise<void>;
}
