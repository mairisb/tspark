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

export const setupStore = (
  preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>
) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
