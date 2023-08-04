import { RegisterForm } from '../../features/auth/components';
import { Page } from '../page';

export const RegisterPage: React.FC = () => {
  return (
    <Page title="Register">
      <RegisterForm />
    </Page>
  );
};
