import { getEnvVar } from '@tspark/common';

export const config = {
  APP_NAME: getEnvVar('APP_NAME'),
  PORT: parseInt(getEnvVar('PORT')),
  SALT_ROUNDS: parseInt(getEnvVar('SALT_ROUNDS')),
  JWT_SECRET: getEnvVar('JWT_SECRET'),
};
