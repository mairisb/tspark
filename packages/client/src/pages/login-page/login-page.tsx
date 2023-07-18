import { useForm } from 'react-hook-form';
import { Page } from '../page';
import { Button, Form, Stack } from 'react-bootstrap';

interface FormData {
  email: string;
  password: string;
}

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  const form = useForm<FormData>();

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
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
    </Page>
  );
}

export default LoginPage;
