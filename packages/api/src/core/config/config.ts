import { getEnvVar } from '@tspark/common';

export const config = {
  appName: getEnvVar('APP_NAME'),
  port: parseInt(getEnvVar('PORT')),
  saltRounds: parseInt(getEnvVar('SALT_ROUNDS')),
  jwtSecret: getEnvVar('JWT_SECRET'),
  jwtIssuer: 'tspark-api',
  jwtAudience: 'tspark-web',
};
