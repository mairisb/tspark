import axios from 'axios';

const register = (email: string, password: string): Promise<void> => {
  return axios
    .post('http://localhost:3333/api/auth/register', { email, password })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return [];
    });
};

const authService = {
  register,
};

export default authService;
