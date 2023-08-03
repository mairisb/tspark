import { SET_AUTH } from '../acionTypes';

export const setAuth = (isLoggedIn: boolean) => {
  return {
    type: SET_AUTH,
    payload: isLoggedIn,
  };
};
