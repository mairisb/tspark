import { Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Page } from '../../../../app/pages/page';
import { useRootStore } from '../../../../core/root.store';
import {
  LoginForm,
  LoginFormData,
} from '../../components/login-form.component';
import { useAuthRedirect } from '../../hooks/auth-redirect.hook';

export const LoginPage: React.FC = observer(() => {
  useAuthRedirect();

  const { authStore } = useRootStore();

  const handleSubmit = (formData: LoginFormData) => {
    authStore.login(formData);
  };

  return (
    <Page title="Login">
      <Stack gap={2}>
        <LoginForm onSubmit={handleSubmit} />
        <Link to="/auth/register">Register</Link>
      </Stack>
    </Page>
  );
});
