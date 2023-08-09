import {
  AuthCheckResponse,
  LoginRequest,
  RegisterRequest,
  UserDto,
} from '@jspark/common';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { config } from '../../core/config';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        withCredentials: true,
        timeout: 10000,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: config.API_URL }),
  endpoints: (builder) => ({
    register: builder.mutation<UserDto, RegisterRequest>({
      query: (req) => ({
        url: '/auth/register',
        method: 'post',
        body: req,
      }),
    }),
    login: builder.mutation<UserDto, LoginRequest>({
      query: (req) => ({
        url: '/auth/login',
        method: 'post',
        body: req,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'post',
      }),
    }),
    authCheck: builder.query<AuthCheckResponse, void>({
      query: () => ({
        url: '/auth/auth-check',
        method: 'get',
      }),
    }),
  }),
});
