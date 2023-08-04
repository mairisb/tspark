import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { BrowsePage } from '../pages/browse/browse.page';
import { GamePage } from '../pages/game/game.page';
import { HomePage } from '../pages/home/home.page';
import { HostPage } from '../pages/host/host.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { store } from '../store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
