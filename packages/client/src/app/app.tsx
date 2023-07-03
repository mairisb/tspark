import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Game } from '../pages/game/game';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { Home } from '../pages/home/home';
import Host from '../pages/host/host';

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
        </Routes>
      </Container>
    </StyledApp>
  );
}

export default App;
