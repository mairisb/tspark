const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (typeof value === 'undefined') {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

export const config = {
  APP_NAME: getEnvVar('NX_APP_NAME'),
};
