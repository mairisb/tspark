import { useForm } from 'react-hook-form';
import { Page } from '../page';
import { Button, Form, Stack } from 'react-bootstrap';
import authService from '../../services/auth.service';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface RegistrationFormData {
  email: string;
  password: string;
}

const registrationFormSchema: yup.ObjectSchema<RegistrationFormData> =
  yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

/* eslint-disable-next-line */
export interface RegisterPageProps {}

export function RegisterPage(props: RegisterPageProps) {
  const form = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onTouched',
  });
  const errors = form.formState.errors;

  const onSubmit = form.handleSubmit((data) => {
    authService
      .register(data.email, data.password)
      .then(() => console.log('Registration successful'))
      .catch((error) => console.error('Registration failed: ', error));
  });

  return (
    <Page title="Register">
      <Form onSubmit={onSubmit}>
        <Stack gap={2}>
          <Form.Group controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              {...form.register('email')}
              isInvalid={Boolean(errors.email)}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...form.register('password')}
              isInvalid={Boolean(errors.password)}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Register</Button>
        </Stack>
      </Form>
    </Page>
  );
}

export default RegisterPage;
