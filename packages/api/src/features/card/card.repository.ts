import { injectable } from 'inversify';
import { appDataSource } from '../../core/db/app-data-source';
import { Card } from './card.entity';
import { ICardRepository } from './card.repository.type';

const repository = appDataSource.getRepository(Card);

@injectable()
export class CardRepository implements ICardRepository {
  findAllForUser(userId: string) {
    return repository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }

  findForUser(userId: string, cardId: string) {
    return repository.findOne({
      where: {
        id: cardId,
        user: {
          id: userId,
        },
      },
    });
  }

  save(card: Card) {
    return repository.save(card);
  }

  async deleteForUser(userId: string, cardId: string) {
    const res = await repository.delete({
      id: cardId,
      user: {
        id: userId,
      },
    });

    return !!res.affected;
  }
}
