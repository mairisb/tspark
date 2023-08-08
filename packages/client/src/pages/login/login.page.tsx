import { Link } from 'react-router-dom';
import { LoginForm } from '../../features/auth/components/login-form.component';
import { Page } from '../page';
import { useAuthRedirect } from '../../features/auth/hooks/auth-redirect.hook';

export const LoginPage: React.FC = () => {
  useAuthRedirect();

  return (
    <Page title="Login">
      <LoginForm />
      <Link to="/register">Register</Link>
    </Page>
  );
};
