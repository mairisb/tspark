import { ActionTypes } from '../store/actionTypes';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.SET_AUTH:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
