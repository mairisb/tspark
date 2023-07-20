import { useForm } from 'react-hook-form';
import { Page } from '../page';
import { Button, Form, Stack } from 'react-bootstrap';
import authService from '../../services/auth.service';

interface FormData {
  email: string;
  password: string;
}

/* eslint-disable-next-line */
export interface RegisterPageProps {}

export function RegisterPage(props: RegisterPageProps) {
  const form = useForm<FormData>();

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
            <Form.Control type="text" {...form.register('email')} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" {...form.register('password')} />
          </Form.Group>
          <Button type="submit">Register</Button>
        </Stack>
      </Form>
    </Page>
  );
}

export default RegisterPage;
