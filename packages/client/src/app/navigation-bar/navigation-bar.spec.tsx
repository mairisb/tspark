import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { authReducer } from '../../features/auth';
import { NavigationBar } from './navigation-bar';

const renderWithStore = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState: {
      auth: {
        isLoggedIn,
        user: null,
        loading: false,
        error: null,
      },
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
