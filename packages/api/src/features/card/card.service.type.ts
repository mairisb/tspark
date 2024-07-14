import { CardDto } from '@tspark/common';
import { ICrudService } from '../../core/crud.service.type';

export interface ICardService extends ICrudService<CardDto> {}
