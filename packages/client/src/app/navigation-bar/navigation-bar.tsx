import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../core/hooks/app-dispatch.hook';
import { authSelectors } from '../../features/auth/auth.selectors';
import { authThunks } from '../../features/auth/auth.thunks';

export const NavigationBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(authThunks.logoutUser());
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
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
            {isLoggedIn ? (
              <Nav.Link data-testid="logout-btn" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link data-testid="login-btn" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
