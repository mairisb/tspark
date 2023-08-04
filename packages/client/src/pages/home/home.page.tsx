import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../features/auth/auth.slice';
import { RootState } from '../../store/store.types';
import { Page } from '../page';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      authActions.loginSuccess({ id: 1, email: 'berzinsmairis@gmail.com' })
    );
  };

  return (
    <Page title="Home">
      <pre>
        {JSON.stringify(
          useSelector((state: RootState) => state),
          null,
          '  '
        )}
      </pre>
      <Button onClick={handleClick}>TEST</Button>
    </Page>
  );
};
