import { observer } from 'mobx-react-lite';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStore } from '../../core/root.store';

const UserDropdown = observer(() => {
  const { authStore } = useStore();

  return (
    <NavDropdown
      title={authStore.user?.username}
      id="nav-dropdown"
      drop="down"
      align="end"
      data-testid="user-dropdown"
    >
      <NavDropdown.Item as={Link} to="/profile">
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item
        data-testid="logout-btn"
        onClick={() => authStore.logout()}
      >
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
});

export const NavigationBar: React.FC = observer(() => {
  const { authStore } = useStore();

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
            {authStore.isAuthenticated ? (
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
});
