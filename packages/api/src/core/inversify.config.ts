import '../features/card/card.controller';
import '../features/game/game.controller';

import { Container } from 'inversify';
import { CardService } from '../features/card/card.service';
import { ICardService } from '../features/card/card.service.type';
import { GameServiceMock } from '../features/game/game.service.mock';
import { IGameService } from '../features/game/game.service.type';

const container = new Container();

container.bind<ICardService>('ICardService').to(CardService);
container.bind<IGameService>('IGameService').to(GameServiceMock);

export { container };
