import { Container } from 'inversify';
import { CardService } from '../features/card/card.service';
import { ICardService } from '../features/card/card.service.type';
import { CardStore } from '../features/card/card.store';
import { ICardStore } from '../features/card/card.store.type';
import { Services, Stores } from './inversify.identifiers';

const container = new Container();

container.bind<ICardService>(Services.Card).to(CardService);

container.bind<ICardStore>(Stores.Card).to(CardStore);

export { container };
