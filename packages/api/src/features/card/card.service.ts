import { inject, injectable } from 'inversify';
import { Repository } from '../../core/di/di.identifiers';
import { IUserRepository } from '../user/user.repository.type';
import { Card } from './card.entity';
import { ICardRepository } from './card.repository.type';
import { ICardService } from './card.service.type';

@injectable()
export class CardService implements ICardService {
  constructor(
    @inject(Repository.Card) private readonly cardRepository: ICardRepository,
    @inject(Repository.User) private readonly userRepository: IUserRepository,
  ) {}

  async getAllForUser(userId: string) {
    return this.cardRepository.findAllForUser(userId);
  }

  async createForUser(userId: string, card: Card) {
    const user = await this.userRepository.find(userId);
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
