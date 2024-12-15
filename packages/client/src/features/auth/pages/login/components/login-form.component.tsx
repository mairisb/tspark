import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import yup from 'yup';

export interface LoginFormData {
  email: string;
  password: string;
}

const loginFormSchema: yup.ObjectSchema<LoginFormData> = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

interface LoginFormProps {
  onSubmit?: (formData: LoginFormData) => any;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const form = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const errors = form.formState.errors;

  const onSubmit = form.handleSubmit((formData) => {
    props.onSubmit && props.onSubmit(formData);
  });

  return (
    <Stack component="form" onSubmit={onSubmit} gap={4}>
      <Stack gap={2}>
        <TextField
          label="E-mail"
          {...form.register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          label="Password"
          {...form.register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </Stack>
      <Button type="submit" variant="contained">
        Log in
      </Button>
    </Stack>
  );
};
