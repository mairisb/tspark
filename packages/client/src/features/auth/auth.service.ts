import { AuthCheckResponse } from '@tspark/common';
import { axiosInstance } from '../../core/api/axios.instance';

const authCheck = (): Promise<AuthCheckResponse> =>
  axiosInstance.get('/auth/auth-check').then((response) => response.data);

export const authService = {
  authCheck,
};
