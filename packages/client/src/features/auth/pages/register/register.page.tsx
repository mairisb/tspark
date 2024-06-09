import { observer } from 'mobx-react-lite';
import { Page } from '../../../../app/pages/page';
import { useRootStore } from '../../../../core/root.store';
import {
  RegisterForm,
  RegisterFormData,
} from '../../components/register-form.component';
import { useAuthRedirect } from '../../hooks/auth-redirect.hook';

export const RegisterPage: React.FC = observer(() => {
  useAuthRedirect();

  const { authStore } = useRootStore();

  const handleSubmit = (formData: RegisterFormData) => {
    authStore.register(formData);
  };

  return (
    <Page title="Register">
      <RegisterForm onSubmit={handleSubmit} />
    </Page>
  );
});
