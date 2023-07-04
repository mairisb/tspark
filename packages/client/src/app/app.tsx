import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Browse from '../pages/browse/browse';
import { Game } from '../pages/game/game';
import { Home } from '../pages/home/home';
import Host from '../pages/host/host';
import { NavigationBar } from './navigation-bar/navigation-bar';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <NavigationBar />
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/host" element={<Host />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Container>
    </StyledApp>
  );
}

export default App;
