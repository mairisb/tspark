import { AuthState } from './auth.interfaces';

export const authInitialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};
