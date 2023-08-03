import { ActionTypes } from '../store/actionTypes';

export const setUser = (user: { username: string; email: string }) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};
