import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authThunks } from '../../features/auth/auth.thunks';
import { useAppDispatch } from '../../store/store.hooks';

export const NavigationBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    // authService.logout();
    dispatch(authThunks.logoutUser());
  };

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
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
