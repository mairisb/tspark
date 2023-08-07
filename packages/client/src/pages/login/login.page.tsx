import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authSelectors } from '../../features/auth';
import { LoginForm } from '../../features/auth/components';
import { Page } from '../page';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Page title="Login">
      <LoginForm />
      <Link to="/register">Register</Link>
    </Page>
  );
};
