import { RegisterForm } from '../../features/auth/components/register-form.component';
import { useAuthRedirect } from '../../features/auth/hooks/auth-redirect.hook';
import { Page } from '../page';

export const RegisterPage: React.FC = () => {
  useAuthRedirect();

  return (
    <Page title="Register">
      <RegisterForm />
    </Page>
  );
};
