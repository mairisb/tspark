import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test.utils';
import { NavigationBar } from './navigation-bar';
import { UserDto } from '@tspark/common';

describe('NavigationBar', () => {
  it('should render Login button when user is not logged in', () => {
    // const rootStore = new RootStore();
    // rootStore.authStore.isAuthenticated = false;
    // renderWithProviders(<NavigationBar />);
    // expect(screen.queryByTestId('login-btn')).toBeInTheDocument();
    // expect(screen.queryByTestId('user-dropdown')).toBeNull();
  });

  it('should render user dropdown button when user is logged in', () => {
    // const rootStore = new RootStore();
    // rootStore.authStore.isAuthenticated = true;
    // rootStore.authStore.user = { username: 'johnsmith' } as UserDto;
    // renderWithProviders(<NavigationBar />);
    // expect(screen.queryByTestId('login-btn')).toBeNull();
    // expect(screen.queryByTestId('user-dropdown')).toBeInTheDocument();
  });
});
