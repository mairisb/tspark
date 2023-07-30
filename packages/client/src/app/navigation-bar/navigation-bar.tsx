import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto d-flex">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/game">
            Game
          </Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link onClick={() => authService.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
