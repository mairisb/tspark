import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../../core/hooks/app-dispatch.hook';
import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { authThunks } from '../auth.thunks';

interface LoginFormData {
  email: string;
  password: string;
}

const loginFormSchema: yup.ObjectSchema<LoginFormData> = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const LoginForm: React.FC = () => {
  const form = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const errors = form.formState.errors;

  const dispatch = useAppDispatch();

  const onSubmit = form.handleSubmit((data) => {
    dispatch(
      authThunks.loginUser({
        email: data.email,
        password: data.password,
      })
    );
  });

  return (
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
  );
};
