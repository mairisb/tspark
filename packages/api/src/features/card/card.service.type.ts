import { CardDto } from '@tspark/common';
import { ICrudService } from '../../core/services/crud.service.type';

export interface ICardService extends ICrudService<CardDto> {
  findAllByUserId: (userId: number) => Promise<CardDto[]>;
}
