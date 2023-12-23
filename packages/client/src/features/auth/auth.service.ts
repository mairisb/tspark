import {
  AuthCheckResponse,
  LoginRequest,
  RegisterRequest,
  UserDto,
} from '@tspark/common';
import { axiosInstance } from '../../core/api/axios.instance';

const register = (req: RegisterRequest): Promise<UserDto> =>
  axiosInstance.post('/auth/register', req).then((response) => response.data);

const login = (req: LoginRequest): Promise<UserDto> =>
  axiosInstance.post('/auth/login', req).then((response) => response.data);

const logout = (): Promise<void> => axiosInstance.post('/auth/logout');

const authCheck = (): Promise<AuthCheckResponse> =>
  axiosInstance.get('/auth/auth-check').then((response) => response.data);

export const authService = {
  register,
  login,
  logout,
  authCheck,
};
