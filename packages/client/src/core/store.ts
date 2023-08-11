import {
  Action,
  PreloadedState,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/auth.slice';
import { apiSlice } from '../features/auth/api.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
