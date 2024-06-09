import { RouteObject } from 'react-router-dom';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';

export const authRoutes: RouteObject = {
  path: 'auth',
  children: [
    {
      path: 'register',
      Component: RegisterPage,
    },
    {
      path: 'login',
      Component: LoginPage,
    },
  ],
};
