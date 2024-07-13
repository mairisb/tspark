import { injectable } from 'inversify';
import { ICardStore } from './card.store.type';

@injectable()
export class CardStore implements ICardStore {}
