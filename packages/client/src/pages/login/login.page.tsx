import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useStore } from '../../core/root.store';
import {
  LoginForm,
  LoginFormData,
} from '../../features/auth/components/login-form.component';
import { useAuthRedirect } from '../../features/auth/hooks/auth-redirect.hook';
import { Page } from '../page';

export const LoginPage: React.FC = observer(() => {
  useAuthRedirect();

  const { authStore } = useStore();

  const handleSubmit = (formData: LoginFormData) => {
    authStore.login(formData);
  };

  return (
    <Page title="Login">
      <LoginForm onSubmit={handleSubmit} />
      <Link to="/register">Register</Link>
    </Page>
  );
});
