import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Page } from '../page';

interface FormData {
  lobbyName: string;
  lobbyPassword: string;
}

export const HostPage: React.FC = () => {
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
};
