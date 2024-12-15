import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNotification } from '../../../../app/hooks/notification.hook';
import { Page } from '../../../../app/pages/page';
import { useAppDispatch } from '../../../../app/hooks/app-dispatch.hook';
import { authThunks } from '../../auth.thunks';
import { LoginForm, LoginFormData } from './components/login-form.component';
import { useAuthRedirect } from '../../hooks/auth-redirect.hook';

export const LoginPage: React.FC = () => {
  useAuthRedirect();
  const dispatch = useAppDispatch();
  const notification = useNotification();

  const handleSubmit = (formData: LoginFormData) => {
    dispatch(authThunks.loginUser(formData))
      .unwrap()
      .then(() => {
        notification.success('Login successful');
      })
      .catch(() => {
        notification.error('Login failed');
      });
  };

  return (
    <Page title="Login">
      <Stack gap={2}>
        <LoginForm onSubmit={handleSubmit} />
        <Link to="/auth/register">Register</Link>
      </Stack>
    </Page>
  );
};
