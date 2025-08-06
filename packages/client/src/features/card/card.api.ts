import { createApi } from '@reduxjs/toolkit/query/react';
import { CardDto } from '@tspark/common';
import { axiosBaseQuery } from '../../app/api/axios-base-query';
import { config } from '../../app/config';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${config.apiUrl}/card` }),
  tagTypes: ['card', 'cards'],
  endpoints: (builder) => ({
    get: builder.query<CardDto, string>({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'get',
      }),
      providesTags: (result, error, id) => [{ type: 'card', id }],
    }),
    getAll: builder.query<CardDto[], void>({
      query: () => ({
        url: `/`,
        method: 'get',
      }),
      providesTags: ['cards'],
    }),
    create: builder.mutation<void, CardDto>({
      query: (card) => ({
        url: '/',
        method: 'post',
        data: card,
      }),
      invalidatesTags: ['cards'],
    }),
    update: builder.mutation<void, CardDto>({
      query: (card) => ({
        url: '/',
        method: 'put',
        data: card,
      }),
      invalidatesTags: (result, error, card) => [
        'cards',
        { type: 'card', id: card.id },
      ],
    }),
    delete: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'delete',
      }),
      invalidatesTags: (result, error, id) => ['cards', { type: 'card', id }],
    }),
  }),
});
