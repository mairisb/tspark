import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { userRepository } from '../user/user.repository';
import { Card } from './card.entity';
import { cardRepository } from './card.repository';
import { ICardService } from './card.service.type';

@injectable()
export class CardService implements ICardService {
  private readonly cardRepository: Repository<Card> = cardRepository;
  private readonly userRepository: Repository<User> = userRepository;

  async getAllForUser(userId: string) {
    const entities = await this.cardRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });

    return entities;
  }

  async createForUser(userId: string, card: Card) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    card.user = user;

    return this.cardRepository.insert(card).then(() => {});
  }

  async deleteForUser(userId: string, cardId: string) {
    const card = this.cardRepository.findOne({
      where: {
        id: cardId,
        user: {
          id: userId,
        },
      },
    });

    if (!card) {
      throw new Error(
        `Cannot delete card. Card with ID '${cardId}' not found or does not belong to the user with ID '${userId}'`,
      );
    }

    this.cardRepository.delete(cardId);
  }
}
