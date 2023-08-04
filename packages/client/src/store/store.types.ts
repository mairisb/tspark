import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AuthState } from '../features/auth/auth.types';

export interface RootState {
  auth: AuthState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
