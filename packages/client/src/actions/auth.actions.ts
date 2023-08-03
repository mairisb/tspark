import { ActionTypes } from '../store/actionTypes';

export const setAuth = (isLoggedIn: boolean) => {
  return {
    type: ActionTypes.SET_AUTH,
    payload: isLoggedIn,
  };
};
