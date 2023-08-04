import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { RootState } from './state.types';
import { authReducer } from '../features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // user: userReducer,
  },
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
