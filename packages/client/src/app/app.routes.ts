import { RouteObject } from 'react-router-dom';
import { authRoutes } from '../features/auth/auth.routes';
import { cardRoutes } from '../features/card/card.routes';
import { gameRoutes } from '../features/game/game.routes';
import { profileRoutes } from '../features/profile/profile.routes';
import { recordRoutes } from '../features/record/record.routes';
import { HomePage } from './pages/home/home.page';

export const appRoutes: RouteObject[] = [
  {
    path: '',
    Component: HomePage,
  },
  authRoutes,
  cardRoutes,
  gameRoutes,
  profileRoutes,
  recordRoutes,
];
