import { CardDto } from '@tspark/common';
import { ICrudService } from '../../core/services/crud.service.type';

export interface ICardService extends ICrudService<CardDto> {
  findAllByUserId: (userId: string) => Promise<CardDto[]>;
  deleteByIdAndUserId: (cardId: string, userId: string) => Promise<void>;
}
