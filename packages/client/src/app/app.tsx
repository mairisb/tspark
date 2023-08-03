import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Browse } from '../pages/browse/browse';
import { Game } from '../pages/game/game';
import { Home } from '../pages/home/home';
import { Host } from '../pages/host/host';
import { LoginPage } from '../pages/login-page/login-page';
import { RegisterPage } from '../pages/register-page/register-page';
import { store } from '../store/store';
import { NavigationBar } from './navigation-bar/navigation-bar';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
