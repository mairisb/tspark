import { Link } from 'react-router-dom';
import { LoginForm, useAuthRedirect } from '../../features/auth';
import { Page } from '../page';

export const LoginPage: React.FC = () => {
  useAuthRedirect();

  return (
    <Page title="Login">
      <LoginForm />
      <Link to="/register">Register</Link>
    </Page>
  );
};
