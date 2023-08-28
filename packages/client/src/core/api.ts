import axios, { AxiosInstance } from 'axios';
import { config } from './config';

export const api: AxiosInstance = axios.create({
  baseURL: config.TSPARK_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
