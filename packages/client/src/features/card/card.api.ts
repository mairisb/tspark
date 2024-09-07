import { createApi } from '@reduxjs/toolkit/query/react';
import { CardDto } from '@tspark/common';
import { axiosBaseQuery } from '../../core/api/axios-base-query';
import { config } from '../../core/config';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${config.apiUrl}/card` }),
  endpoints: (builder) => ({
    get: builder.query<CardDto, number>({
      query: (id: number) => ({
        url: `/${id}`,
        method: 'get',
      }),
    }),
    getAll: builder.query<CardDto[], void>({
      query: () => ({
        url: `/`,
        method: 'get',
      }),
    }),
    create: builder.mutation<void, CardDto>({
      query: (card) => ({
        url: '/',
        method: 'post',
        data: card,
      }),
    }),
    update: builder.mutation<void, CardDto>({
      query: (card) => ({
        url: '/',
        method: 'put',
        data: card,
      }),
    }),
    delete: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'delete',
      }),
    }),
  }),
});
