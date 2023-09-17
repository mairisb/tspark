import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../core/hooks/app-dispatch.hook';
import { authSelectors } from '../../features/auth/auth.selectors';
import { authThunks } from '../../features/auth/auth.thunks';

const UserDropdown = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(authSelectors.selectUser);

  const handleLogout = () => {
    dispatch(authThunks.logoutUser());
  };

  return (
    <NavDropdown
      title={user?.username}
      id="nav-dropdown"
      drop="down"
      align="end"
      data-testid="user-dropdown"
    >
      <NavDropdown.Item as={Link} to="/profile">
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item data-testid="logout-btn" onClick={handleLogout}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export const NavigationBar: React.FC = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

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
              <UserDropdown />
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
