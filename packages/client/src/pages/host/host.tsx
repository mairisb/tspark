import { Button, Form, Stack } from 'react-bootstrap';
import { Page } from '../page';
import { useForm } from 'react-hook-form';

interface FormData {
  lobbyName: string;
  lobbyPassword: string;
}

/* eslint-disable-next-line */
export interface HostProps {}

export function Host(props: HostProps) {
  const form = useForm<FormData>();

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Page title="Host a game">
      <Form onSubmit={onSubmit}>
        <Stack gap={2}>
          <Form.Group controlId="lobbyName">
            <Form.Label>Lobby Name</Form.Label>
            <Form.Control type="text" {...form.register('lobbyName')} />
          </Form.Group>
          <Form.Group controlId="lobbyPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" {...form.register('lobbyPassword')} />
          </Form.Group>
          <Button type="submit">Host</Button>
        </Stack>
      </Form>
    </Page>
  );
}

export default Host;
