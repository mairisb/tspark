import { api } from './api';

const register = (email: string, password: string): Promise<void> =>
  api.post('auth/register', { email, password }).then((res) => res.data);

const login = (email: string, password: string): Promise<void> =>
  api.post('auth/login', { email, password }).then((res) => res.data);

const logout = (): Promise<void> => api.post('auth/logout');

export const authService = {
  register,
  login,
  logout,
};
