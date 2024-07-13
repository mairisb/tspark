import { getEnvVar } from '@tspark/common';

export const config = {
  appName: getEnvVar('TSPARK_APP_APP_NAME'),
  apiUrl: getEnvVar('TSPARK_APP_API_URL'),
};
