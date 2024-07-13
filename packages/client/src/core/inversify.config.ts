import { Container } from 'inversify';
import { CardClient } from '../features/card/card.client';
import { ICardClient } from '../features/card/card.client.type';
import { CardStore } from '../features/card/card.store';
import { ICardStore } from '../features/card/card.store.type';
import { Clients, Stores } from './inversify.identifiers';

const container = new Container();

container.bind<ICardClient>(Clients.Card).to(CardClient);

container.bind<ICardStore>(Stores.Card).to(CardStore);

export { container };
