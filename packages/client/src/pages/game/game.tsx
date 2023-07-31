import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Page } from '../page';

export const Game: React.FC = () => {
  return (
    <Page title="The Game">
      <Stack gap={1}>
        <LinkContainer to="/browse">
          <Button>Browse</Button>
        </LinkContainer>
        <LinkContainer to="/host">
          <Button>Host</Button>
        </LinkContainer>
      </Stack>
    </Page>
  );
};
