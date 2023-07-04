import { Button, Stack } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Page } from '../page';

/* eslint-disable-next-line */
export interface GameProps {}

export function Game(props: GameProps) {
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
}
