import {
  Action,
  PreloadedState,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { authApi } from '../features/auth/auth.api';
import { authReducer } from '../features/auth/auth.slice';
import { cardApi } from '../features/card/card.api';
import { api } from './api/api';

const rootReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [cardApi.reducerPath]: cardApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        api.middleware,
        authApi.middleware,
        cardApi.middleware,
      ),
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
