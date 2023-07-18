import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

const StyledNavigationBar = styled(Navbar)``;

export function NavigationBar(props: NavigationBarProps) {
  return (
    <StyledNavigationBar bg="primary" data-bs-theme="dark">
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
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </StyledNavigationBar>
  );
}
