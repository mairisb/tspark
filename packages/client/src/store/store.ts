import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/auth.slice';
import { RootState } from './state.types';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
