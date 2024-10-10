import { ThemeProvider } from '@emotion/react';
import { Container, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { useAppDispatch } from './hooks/app-dispatch.hook';
import { authThunks } from '../features/auth/auth.thunks';
import { appRoutes } from './app.routes';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { appTheme, desktopTheme, mobileTheme } from './theme/app.theme';

export const App: React.FC = () => {
  const isMobile = useMediaQuery(appTheme.breakpoints.down('sm'));
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authThunks.authCheck());
  }, []);

  const routes = useRoutes(appRoutes);

  return (
    <ThemeProvider theme={appTheme}>
      <ThemeProvider theme={isMobile ? mobileTheme : desktopTheme}>
        <div>
          <NavigationBar />
          <Container fixed>{routes}</Container>
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
};
