import { CardDto } from '@tspark/common';
import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { Clients } from '../../core/inversify.identifiers';
import { ICardClient } from './card.client.type';
import { ICardStore } from './card.store.type';

@injectable()
export class CardStore implements ICardStore {
  @inject(Clients.Card) private cardClient!: ICardClient;

  cards: CardDto[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchAll() {
    this.cards = await this.cardClient.getAll();
  }

  async create(cardDto: CardDto) {
    await this.cardClient.create(cardDto);
    this.cards.push(cardDto);
  }
}
