import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useAppDispatch } from '../core/hooks/app-dispatch.hook';
import { authThunks } from '../features/auth/auth.thunks';
import { appRoutes } from './app.routes';
import { NavigationBar } from './components/navigation-bar/navigation-bar';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authThunks.authCheck());
  }, []);

  const routes = useRoutes(appRoutes);

  return (
    <div>
      <NavigationBar />
      <Container fixed>{routes}</Container>
    </div>
  );
};
