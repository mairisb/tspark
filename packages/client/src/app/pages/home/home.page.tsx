import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthRedirect } from '../../../features/auth/hooks/auth-redirect.hook';
import { Page } from '../page';

export const HomePage: React.FC = () => {
  useAuthRedirect('/card/all');

  return (
    <Page title="Welcome">
      <Stack gap={2}>
        <Typography>
          Hey! TSpark is a one stop store (pun intended) for all your loyalty
          card needs.
        </Typography>

        <Stack direction={'row'} gap={1}>
          <Button variant="contained" component={Link} to="/auth/login">
            Login
          </Button>
          <Button variant="contained" component={Link} to="/auth/register">
            Register
          </Button>
        </Stack>
      </Stack>
    </Page>
  );
};
