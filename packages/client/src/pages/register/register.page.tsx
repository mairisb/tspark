import { useAppDispatch } from '../../core/hooks/app-dispatch.hook';
import { authThunks } from '../../features/auth/auth.thunks';
import {
  RegisterForm,
  RegisterFormData,
} from '../../features/auth/components/register-form.component';
import { useAuthRedirect } from '../../features/auth/hooks/auth-redirect.hook';
import { Page } from '../page';

export const RegisterPage: React.FC = () => {
  useAuthRedirect();
  const dispatch = useAppDispatch();

  const handleSubmit = (formData: RegisterFormData) => {
    dispatch(authThunks.registerUser(formData));
  };

  return (
    <Page title="Register">
      <RegisterForm onSubmit={handleSubmit} />
    </Page>
  );
};
