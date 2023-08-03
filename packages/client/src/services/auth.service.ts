import { LoginRequest, RegisterRequest, UserDto } from '@jspark/common';
import { api } from './api';

const register = (req: RegisterRequest): Promise<UserDto> =>
  api.post('auth/register', req).then((res) => res.data);

const login = (req: LoginRequest): Promise<UserDto> =>
  api.post('auth/login', req).then((res) => res.data);

const logout = (): Promise<void> => api.post('auth/logout');

export const authService = {
  register,
  login,
  logout,
};
