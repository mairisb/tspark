import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useAppDispatch } from '../../store';
import { Page } from '../page';
import { authSelectors, authThunks } from '../../features/auth';

interface LoginFormData {
  email: string;
  password: string;
}

const loginFormSchema: yup.ObjectSchema<LoginFormData> = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const LoginPage: React.FC = () => {
  const form = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const errors = form.formState.errors;

  const dispatch = useAppDispatch();

  const onSubmit = form.handleSubmit((data) => {
    dispatch(
      authThunks.loginUser({ email: data.email, password: data.password })
    );
  });

  return (
    <Page title="Login">
      <pre>
        {JSON.stringify(useSelector(authSelectors.selectAuth), null, '  ')}
      </pre>
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
          <Button type="submit">Log in</Button>
        </Stack>
      </Form>
      <Link to="/register">Register</Link>
    </Page>
  );
};
