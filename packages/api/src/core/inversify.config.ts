import '../features/card/card.controller';
import '../features/game/game.controller';
import '../features/user/user.controller';

import { Container } from 'inversify';
import { CardService } from '../features/card/card.service';
import { ICardService } from '../features/card/card.service.type';
import { GameServiceMock } from '../features/game/game.service.mock';
import { IGameService } from '../features/game/game.service.type';
import { UserService } from '../features/user/user.service';
import { IUserService } from '../features/user/user.service.type';

const container = new Container();

container.bind<ICardService>('ICardService').to(CardService);
container.bind<IGameService>('IGameService').to(GameServiceMock);
container.bind<IUserService>('IUserService').to(UserService);

export { container };
