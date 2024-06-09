import { RouteObject } from 'react-router-dom';
import { AddCardPage } from './pages/add-card.page';
import { CardsPage } from './pages/cards.page';

export const cardRoutes: RouteObject = {
  path: 'card',
  children: [
    {
      path: 'all',
      Component: CardsPage,
    },
    {
      path: 'add',
      Component: AddCardPage,
    },
  ],
};
