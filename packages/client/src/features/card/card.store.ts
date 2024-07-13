import { CardDto } from '@tspark/common';
import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { Services } from '../../core/inversify.identifiers';
import { ICardService } from './card.service.type';
import { ICardStore } from './card.store.type';

@injectable()
export class CardStore implements ICardStore {
  cards: CardDto[] = [];

  constructor(@inject(Services.Card) private cardService: ICardService) {
    makeAutoObservable(this);
  }

  async fetchAll() {
    this.cards = await this.cardService.getAll();
  }
}
