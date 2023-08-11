import * as ReactRouterDom from 'react-router-dom';
import { renderWithProviders } from '../../utils/test.utils';
import { LoginPage } from './login.page';
import { AuthState } from '../../features/auth/auth.types';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('LoginPage', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (ReactRouterDom.useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it('should stay in login page if user is not logged in', () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        auth: { isLoggedIn: false } as AuthState,
      },
    });

    expect(navigate).toHaveBeenCalledTimes(0);
  });

  it('should redirect to home if the user is logged in', () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        auth: { isLoggedIn: true } as AuthState,
      },
    });

    expect(navigate).toHaveBeenCalledWith('/');
  });
});
