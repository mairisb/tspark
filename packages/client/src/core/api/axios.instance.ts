import axios, { AxiosInstance } from 'axios';
import { config } from '../config';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  validateStatus: (status) => (status >= 200 && status < 300) || status === 401,
});
