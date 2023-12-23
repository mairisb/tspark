import { observer } from 'mobx-react-lite';
import { useStore } from '../../core/root.store';
import {
  RegisterForm,
  RegisterFormData,
} from '../../features/auth/components/register-form.component';
import { useAuthRedirect } from '../../features/auth/hooks/auth-redirect.hook';
import { Page } from '../page';

export const RegisterPage: React.FC = observer(() => {
  useAuthRedirect();

  const { authStore } = useStore();

  const handleSubmit = (formData: RegisterFormData) => {
    authStore.register(formData);
  };

  return (
    <Page title="Register">
      <RegisterForm onSubmit={handleSubmit} />
    </Page>
  );
});
