import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Game } from '../pages/game/game';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { Home } from '../pages/home/home';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NavigationBar />
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Container>
    </StyledApp>
  );
}

export default App;
