import { Reducer } from 'react';
import { GlobalState } from './global-state';

export type GlobalReducerAction = { type: 'IS_AUTHORIZED'; payload: boolean };

export const globalReducer: Reducer<GlobalState, GlobalReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'IS_AUTHORIZED':
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
