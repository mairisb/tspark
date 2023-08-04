import { AuthState } from './auth.types';

export const authInitialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};
