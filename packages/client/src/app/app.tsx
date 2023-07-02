import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Game } from '../pages/game/game';
import { HomePage } from '../pages/home-page/home-page';
import { NavigationBar } from './navigation-bar/navigation-bar';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NavigationBar />
      <Container className="py-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Container>
    </StyledApp>
  );
}

export default App;
