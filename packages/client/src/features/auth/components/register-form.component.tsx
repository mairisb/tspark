import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from 'packages/client/src/services/auth.service';
import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface RegistrationFormData {
  email: string;
  password: string;
}

const registrationFormSchema: yup.ObjectSchema<RegistrationFormData> =
  yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

export const RegisterForm: React.FC = () => {
  const form = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationFormSchema),
    mode: 'onTouched',
  });
  const errors = form.formState.errors;

  const onSubmit = form.handleSubmit((data) => {
    authService
      .register({ email: data.email, password: data.password })
      .then(() => console.log('Registration successful'))
      .catch((error) => console.error('Registration failed: ', error));
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
