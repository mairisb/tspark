import { Reducer } from 'react';
import { GlobalState } from '../global-state';
import { GlobalReducerAction } from './global-reducer-action';
import { GlobalReducerActionTypes } from './global-reducer-action-types';

export const globalReducer: Reducer<GlobalState, GlobalReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case GlobalReducerActionTypes.IS_AUTHORIZED:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
