import { getEnvVar } from '@tspark/common';

export const config = {
  TSPARK_APP_APP_NAME: getEnvVar('TSPARK_APP_APP_NAME'),
  TSPARK_APP_API_URL: getEnvVar('TSPARK_APP_API_URL'),
};
