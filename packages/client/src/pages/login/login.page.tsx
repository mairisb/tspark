import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../core/hooks/app-dispatch.hook';
import { authThunks } from '../../features/auth/auth.thunks';
import {
  LoginForm,
  LoginFormData,
} from '../../features/auth/components/login-form.component';
import { useAuthRedirect } from '../../features/auth/hooks/auth-redirect.hook';
import { Page } from '../page';

export const LoginPage: React.FC = () => {
  useAuthRedirect();
  const dispatch = useAppDispatch();

  const handleSubmit = (formData: LoginFormData) => {
    dispatch(authThunks.loginUser(formData));
  };

  return (
    <Page title="Login">
      <LoginForm onSubmit={handleSubmit} />
      <Link to="/register">Register</Link>
    </Page>
  );
};
