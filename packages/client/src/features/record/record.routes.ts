import { RouteObject } from 'react-router-dom';
import { RecordPage } from './pages/record.page';

export const recordRoutes: RouteObject = {
  path: 'record',
  children: [
    {
      path: '',
      Component: RecordPage,
    },
  ],
};
