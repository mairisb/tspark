import '../features/auth/auth.controller';
import '../features/card/card.controller';
import '../features/game/game.controller';
import '../features/user/user.controller';

import { Container } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';
import { AuthMiddleware } from '../features/auth/auth.middleware';
import { AuthService } from '../features/auth/auth.service';
import { IAuthService } from '../features/auth/auth.service.type';
import { CardService } from '../features/card/card.service';
import { ICardService } from '../features/card/card.service.type';
import { GameServiceMock } from '../features/game/game.service.mock';
import { IGameService } from '../features/game/game.service.type';
import { UserService } from '../features/user/user.service';
import { IUserService } from '../features/user/user.service.type';
import { Middleware, Services } from './inversify.identifiers';

const container = new Container();

container.bind<BaseMiddleware>(Middleware.Auth).to(AuthMiddleware);

container.bind<IAuthService>(Services.Auth).to(AuthService);
container.bind<ICardService>(Services.Card).to(CardService);
container.bind<IGameService>(Services.Game).to(GameServiceMock);
container.bind<IUserService>(Services.User).to(UserService);

export { container };
