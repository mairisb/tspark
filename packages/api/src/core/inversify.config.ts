import '../features/game/game.controller';

import { Container } from 'inversify';
import { GameServiceMock } from '../features/game/game.service.mock';
import { IGameService } from '../features/game/game.service.type';

const container = new Container();

container.bind<IGameService>('IGameService').to(GameServiceMock);

export { container };
