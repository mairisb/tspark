let _authToken: string | null = null;

export const authTokenStorage = {
  get: () => _authToken,
  set: (token: string) => (_authToken = token),
  clear: () => (_authToken = null),
};
