import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../page';
import { setAuth } from '../../store/actions/auth.actions';
import { setUser } from '../../store/actions/user.actions';
import { Button } from 'react-bootstrap';
import { RootState } from '../../store/state.types';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: RootState) => state.auth);
  const user = useSelector((state: RootState) => state.user);

  const handleClick = () => {
    dispatch(setAuth(true));
    // dispatch(setUser({ username: 'JohnDoe', email: 'johndoe@example.com' }));
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
