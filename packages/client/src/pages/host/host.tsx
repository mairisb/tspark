import { Button, Form, Stack } from 'react-bootstrap';
import { Page } from '../page';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../global-state/use-global-context';

interface FormData {
  lobbyName: string;
  lobbyPassword: string;
}

export const Host: React.FC = () => {
  const form = useForm<FormData>();

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  const globalContext = useGlobalContext();

  return (
    <Page title="Host a game">
      <pre>{JSON.stringify(globalContext.state)}</pre>
      <button
        onClick={() => {
          globalContext.setState({ isLoggedIn: true });
        }}
      >
        TEST
      </button>
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
