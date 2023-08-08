import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { BrowsePage } from '../pages/browse/browse.page';
import { GamePage } from '../pages/game/game.page';
import { HomePage } from '../pages/home/home.page';
import { HostPage } from '../pages/host/host.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { authThunks } from '../features/auth/auth.thunks';
import { useAppDispatch } from '../core/hooks/app-dispatch.hook';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authThunks.authCheck());
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </Container>
    </div>
  );
};
