import { RegisterForm, useAuthRedirect } from '../../features/auth';
import { Page } from '../page';

export const RegisterPage: React.FC = () => {
  useAuthRedirect();

  return (
    <Page title="Register">
      <RegisterForm />
    </Page>
  );
};
