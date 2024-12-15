import { useAppDispatch } from '../../../../app/hooks/app-dispatch.hook';
import { useNotification } from '../../../../app/hooks/notification.hook';
import { Page } from '../../../../app/pages/page';
import { authThunks } from '../../auth.thunks';
import { useAuthRedirect } from '../../hooks/auth-redirect.hook';
import {
  RegisterForm,
  RegisterFormData,
} from './components/register-form.component';

export const RegisterPage: React.FC = () => {
  useAuthRedirect();
  const dispatch = useAppDispatch();
  const notification = useNotification();

  const handleSubmit = (formData: RegisterFormData) => {
    dispatch(authThunks.registerUser(formData))
      .unwrap()
      .then(() => {
        notification.success('Registration successful');
      })
      .catch(() => {
        notification.error('Registration failed');
      });
  };

  return (
    <Page title="Register">
      <RegisterForm onSubmit={handleSubmit} />
    </Page>
  );
};
