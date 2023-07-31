import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { GlobalContextProvider } from '../global-state/global-context-provider';
import { Browse } from '../pages/browse/browse';
import { Game } from '../pages/game/game';
import { Home } from '../pages/home/home';
import { Host } from '../pages/host/host';
import { LoginPage } from '../pages/login-page/login-page';
import { RegisterPage } from '../pages/register-page/register-page';
import { NavigationBar } from './navigation-bar/navigation-bar';

export const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <NavigationBar />
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/game" element={<Game />} />
          <Route path="/host" element={<Host />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Container>
    </GlobalContextProvider>
  );
};
