import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
