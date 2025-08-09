import '../../features/auth/auth.controller';
import '../../features/card/card.controller';
import '../../features/user/user.controller';

import { Container } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';

import { Middleware, Repository, Services } from './di.identifiers';

import { AuthMiddleware } from '../../features/auth/auth.middleware';
import { AuthService } from '../../features/auth/auth.service';
import { IAuthService } from '../../features/auth/auth.service.type';
import { CardRepository } from '../../features/card/card.repository';
import { ICardRepository } from '../../features/card/card.repository.type';
import { CardService } from '../../features/card/card.service';
import { ICardService } from '../../features/card/card.service.type';
import { UserService } from '../../features/user/user.service';
import { IUserService } from '../../features/user/user.service.type';

const container = new Container();

container.bind<BaseMiddleware>(Middleware.Auth).to(AuthMiddleware);

container.bind<ICardRepository>(Repository.Card).to(CardRepository);

container.bind<IAuthService>(Services.Auth).to(AuthService);
container.bind<ICardService>(Services.Card).to(CardService);
container.bind<IUserService>(Services.User).to(UserService);

export { container };
