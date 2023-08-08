import axios, { AxiosInstance } from 'axios';
import { config } from './config';

export const api: AxiosInstance = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
