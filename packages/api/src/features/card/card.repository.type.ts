import { Card } from './card.entity';

export interface ICardRepository {
  findAllForUser(userId: string): Promise<Card[]>;
  findForUser(userId: string, cardId: string): Promise<Card | null>;
  save(card: Card): Promise<Card>;
  deleteForUser(userId: string, cardId: string): Promise<boolean>;
}
