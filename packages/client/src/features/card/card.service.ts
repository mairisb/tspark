import { CardDto } from '@tspark/common';
import { injectable } from 'inversify';
import { axiosInstance } from '../../core/api/axios.instance';
import { ICardService } from './card.service.type';

@injectable()
export class CardService implements ICardService {
  async getAll(): Promise<CardDto[]> {
    try {
      const res = await axiosInstance.get('card');
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async create(card: CardDto): Promise<void> {
    try {
      const res = await axiosInstance.post('card', card);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
