import { inject, injectable } from 'inversify';
import { Repository as TypeOrmRepository } from 'typeorm';
import { Repository } from '../../core/di/di.identifiers';
import { User } from '../user/user.entity';
import { userRepository } from '../user/user.repository';
import { Card } from './card.entity';
import { ICardRepository } from './card.repository.type';
import { ICardService } from './card.service.type';

@injectable()
export class CardService implements ICardService {
  private readonly userRepository: TypeOrmRepository<User> = userRepository;

  constructor(
    @inject(Repository.Card) private readonly cardRepository: ICardRepository,
  ) {}

  async getAllForUser(userId: string) {
    return this.cardRepository.findAllForUser(userId);
  }

  async createForUser(userId: string, card: Card) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    card.user = user;

    this.cardRepository.save(card);
  }

  async deleteForUser(userId: string, cardId: string) {
    const card = this.cardRepository.findForUser(userId, cardId);
    if (!card) {
      throw new Error(`Card not found`);
    }

    this.cardRepository.deleteForUser(userId, cardId);
  }
}
