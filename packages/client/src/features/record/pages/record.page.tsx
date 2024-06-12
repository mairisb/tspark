import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Page } from '../../../app/pages/page';

export const RecordPage: React.FC = observer(() => {
  return (
    <Page title="Record">
      <Typography>Hello world</Typography>
    </Page>
  );
});
