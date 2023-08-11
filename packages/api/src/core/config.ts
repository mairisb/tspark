import { getEnvVar } from '@tspark/common';

export const config = {
  APP_NAME: getEnvVar('APP_NAME'),
  PORT: getEnvVar('PORT'),
  JWT_SECRET: getEnvVar('JWT_SECRET'),
};
