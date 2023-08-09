import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../core/store';
import { NavigationBar } from './navigation-bar';

const renderWithStore = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const store = setupStore({
    auth: {
      isLoggedIn,
      user: null,
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    </Provider>
  );
};

describe('NavigationBar', () => {
  it('should render Login button when user is not logged in', () => {
    renderWithStore({ isLoggedIn: false });

    expect(screen.queryByTestId('login-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('logout-btn')).toBeNull();
  });

  it('should render Logout button when user is logged in', () => {
    renderWithStore({ isLoggedIn: true });

    expect(screen.queryByTestId('login-btn')).toBeNull();
    expect(screen.queryByTestId('logout-btn')).toBeInTheDocument();
  });
});
