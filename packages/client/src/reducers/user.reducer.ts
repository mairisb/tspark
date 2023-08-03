import { ActionTypes } from '../store/actionTypes';

const initialState = {
  user: {
    username: '',
    email: '',
  },
};

export const userReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
