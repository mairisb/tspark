import { CardDto } from '@tspark/common';
import { injectable } from 'inversify';
import { CrudClient } from '../../core/api-client/crud.client';
import { ICardClient } from './card.client.type';

@injectable()
export class CardClient extends CrudClient<CardDto> implements ICardClient {
  RESOURCE_NAME = 'card';
}
