import { CardDto } from '@tspark/common';
import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { Services } from '../../core/inversify.identifiers';
import { ICardService } from './card.service.type';
import { ICardStore } from './card.store.type';

@injectable()
export class CardStore implements ICardStore {
  @inject(Services.Card) private cardService!: ICardService;

  cards: CardDto[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchAll() {
    this.cards = await this.cardService.getAll();
  }

  async create(cardDto: CardDto) {
    await this.cardService.create(cardDto);
    this.cards.push(cardDto);
  }
}
