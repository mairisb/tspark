import { SET_USER } from '../acionTypes';

export const setUser = (user: { username: string; email: string }) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
