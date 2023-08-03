import { SET_AUTH } from '../acionTypes';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
