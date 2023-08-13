import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

const registerFormSchema: yup.ObjectSchema<RegisterFormData> = yup.object({
  username: yup.string().min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

interface LoginFormProps {
  onSubmit?: (formData: RegisterFormData) => any;
}

export const RegisterForm: React.FC<LoginFormProps> = (props) => {
  const form = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
    mode: 'onTouched',
  });
  const errors = form.formState.errors;

  const onSubmit = form.handleSubmit((formData) => {
    props.onSubmit && props.onSubmit(formData);
  });

  return (
    <Form onSubmit={onSubmit}>
      <Stack gap={2}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...form.register('username')}
            isInvalid={Boolean(errors.username)}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username?.message}
          </Form.Control.Feedback>
        </Form.Group>
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
