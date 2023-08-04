import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { RootState } from './state.types';
import { authReducer } from '../features/auth/auth.slice';
import { useDispatch } from 'react-redux';

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

// Define your app's dispatch type based on your store
type AppDispatch = typeof store.dispatch;

// Create a typed version of useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
