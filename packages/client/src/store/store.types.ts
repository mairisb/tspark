import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AuthState } from '../features/auth';

export interface RootState {
  auth: AuthState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
