import {
  AuthCheckResponse,
  LoginRequest,
  RegisterRequest,
  UserDto,
} from '@tspark/common';
import { apiClient } from '../../core/api-client/api.client';

// TODO: handle register failure
const register = (req: RegisterRequest): Promise<UserDto> =>
  apiClient.post('/auth/register', req).then((response) => response.data);

// TODO: handle login failure
const login = (req: LoginRequest): Promise<UserDto> =>
  apiClient.post('/auth/login', req).then((response) => response.data);

const logout = (): Promise<void> => apiClient.post('/auth/logout');

const authCheck = (): Promise<AuthCheckResponse> =>
  apiClient.get('/auth/auth-check').then((response) => response.data);

export const authClient = {
  register,
  login,
  logout,
  authCheck,
};
