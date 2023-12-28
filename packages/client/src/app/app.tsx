import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { BrowsePage } from '../pages/browse/browse.page';
import { GamePage } from '../pages/game/game.page';
import { HomePage } from '../pages/home/home.page';
import { HostPage } from '../pages/host/host.page';
import { LoginPage } from '../pages/login/login.page';
import { ProfilePage } from '../pages/profile/profile.page';
import { RegisterPage } from '../pages/register/register.page';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { observer } from 'mobx-react-lite';
import { TabsTestPage } from '../pages/tabs-test/tabs-test.page';

export const App: React.FC = observer(() => {
  return (
    <div>
      <NavigationBar />
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/tabs-test" element={<TabsTestPage />} />
        </Routes>
      </Container>
    </div>
  );
});
