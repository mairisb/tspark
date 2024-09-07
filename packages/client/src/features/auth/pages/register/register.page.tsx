import { Page } from '../../../../app/pages/page';
import { useAppDispatch } from '../../../../core/hooks/app-dispatch.hook';
import { authThunks } from '../../auth.thunks';
import {
  RegisterForm,
  RegisterFormData,
} from '../../components/register-form.component';
import { useAuthRedirect } from '../../hooks/auth-redirect.hook';

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
