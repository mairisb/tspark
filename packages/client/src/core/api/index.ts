import { createApi } from '@reduxjs/toolkit/query/react';
import { config } from '../config';
import { axiosBaseQuery } from './axios.base-query';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: config.TSPARK_APP_API_URL }),
  endpoints: (builder) => ({}),
});
