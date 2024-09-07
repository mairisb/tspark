import { createApi } from '@reduxjs/toolkit/query/react';
import {
  AuthCheckResponse,
  LoginRequest,
  RegisterRequest,
  UserDto,
} from '@tspark/common';
import { axiosBaseQuery } from '../../core/api/axios-base-query';
import { config } from '../../core/config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${config.apiUrl}/auth` }),
  endpoints: (builder) => ({
    register: builder.mutation<UserDto, RegisterRequest>({
      query: (req) => ({
        url: '/register',
        method: 'post',
        data: req,
      }),
    }),
    login: builder.mutation<UserDto, LoginRequest>({
      query: (req) => ({
        url: '/login',
        method: 'post',
        data: req,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'post',
      }),
    }),
    authCheck: builder.query<AuthCheckResponse, void>({
      query: () => ({
        url: '/auth-check',
        method: 'get',
      }),
    }),
  }),
});
