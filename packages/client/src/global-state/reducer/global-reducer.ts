import { Reducer } from 'react';
import { GlobalState } from '../global-state';
import { GlobalReducerAction } from './global-reducer-action';

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
