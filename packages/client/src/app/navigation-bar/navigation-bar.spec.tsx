import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { AuthState } from '../../features/auth/auth.types';
import { renderWithProviders } from '../../utils/test.utils';
import { NavigationBar } from './navigation-bar';

describe('NavigationBar', () => {
  it('should render Login button when user is not logged in', () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        auth: { isLoggedIn: false } as AuthState,
      },
    });

    expect(screen.queryByTestId('login-btn')).toBeInTheDocument();
    expect(screen.queryByTestId('logout-btn')).toBeNull();
  });

  it('should render Logout button when user is logged in', () => {
    renderWithProviders(<NavigationBar />, {
      preloadedState: {
        auth: { isLoggedIn: true } as AuthState,
      },
    });

    expect(screen.queryByTestId('login-btn')).toBeNull();
    expect(screen.queryByTestId('logout-btn')).toBeInTheDocument();
  });
});
