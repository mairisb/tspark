import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from '../../features/auth';
import { LoginForm } from '../../features/auth/components';
import { Page } from '../page';

export const LoginPage: React.FC = () => {
  return (
    <Page title="Login">
      <pre>
        {JSON.stringify(useSelector(authSelectors.selectAuth), null, '  ')}
      </pre>

      <LoginForm />

      <Link to="/register">Register</Link>
    </Page>
  );
};
