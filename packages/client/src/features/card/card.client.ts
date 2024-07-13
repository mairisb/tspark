import { CardDto } from '@tspark/common';
import { injectable } from 'inversify';
import { apiClient } from '../../core/api/api.client';
import { ICardClient } from './card.client.type';

@injectable()
export class CardClient implements ICardClient {
  async getAll(): Promise<CardDto[]> {
    try {
      const res = await apiClient.get('card');
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async create(card: CardDto): Promise<void> {
    try {
      const res = await apiClient.post('card', card);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
