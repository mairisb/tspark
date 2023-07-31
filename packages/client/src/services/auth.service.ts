import axios from 'axios';

const register = (email: string, password: string): Promise<void> =>
  axios
    .post('http://localhost:3333/api/auth/register', { email, password })
    .then((res) => res.data);

const login = (email: string, password: string): Promise<void> =>
  axios
    .post(
      'http://localhost:3333/api/auth/login',
      { email, password },
      { withCredentials: true }
    )
    .then((res) => res.data);

const logout = (): Promise<void> =>
  axios.post(
    'http://localhost:3333/api/auth/logout',
    {},
    { withCredentials: true }
  );

export const authService = {
  register,
  login,
  logout,
};
