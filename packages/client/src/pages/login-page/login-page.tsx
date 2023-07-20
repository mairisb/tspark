import { useForm } from 'react-hook-form';
import { Page } from '../page';
import { Button, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';

interface FormData {
  email: string;
  password: string;
}

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const form = useForm<FormData>();

  const onSubmit = form.handleSubmit((data) => {
    authService
      .login(data.email, data.password)
      .then(() => console.log('Login successful'))
      .catch((error) => console.error('Login failed: ', error));
  });

  return (
    <Page title="Login">
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
          <Button type="submit">Log in</Button>
        </Stack>
      </Form>
      <Link to="/register">Register</Link>
    </Page>
  );
}

export default LoginPage;
