import { getEnvVar } from '@tspark/common';

export const config = {
  APP_NAME: getEnvVar('APP_NAME'),
  API_URL: getEnvVar('API_URL'),
};
