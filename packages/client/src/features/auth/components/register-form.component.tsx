import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { authThunks } from '../../../features/auth';
import { useAppDispatch } from '../../../store';

interface RegisterFormData {
  email: string;
  password: string;
}

const registerFormSchema: yup.ObjectSchema<RegisterFormData> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const RegisterForm: React.FC = () => {
  const form = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
    mode: 'onTouched',
  });
  const errors = form.formState.errors;

  const dispatch = useAppDispatch();
  const onSubmit = form.handleSubmit((data) => {
    dispatch(
      authThunks.registerUser({
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
        <Button type="submit">Register</Button>
      </Stack>
    </Form>
  );
};
