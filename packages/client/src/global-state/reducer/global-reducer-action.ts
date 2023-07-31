import { GlobalReducerActionTypes } from './global-reducer-action-types';

export type GlobalReducerAction = {
  type: GlobalReducerActionTypes.IS_AUTHORIZED;
  payload: boolean;
};
