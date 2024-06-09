import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
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
    <Stack component="form" onSubmit={onSubmit} gap={4}>
      <Stack gap={2}>
        <TextField
          label="Username"
          {...form.register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label="E-mail"
          {...form.register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          label="Passowrd"
          {...form.register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Stack>
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Stack>
  );
};
