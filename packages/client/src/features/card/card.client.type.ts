import { CardDto } from '@tspark/common';
import { ICrudClient } from '../../core/api-client/crud.client.type';

export interface ICardClient extends ICrudClient<CardDto> {}
