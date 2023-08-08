import { render } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as ReactRouterDom from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../core/store';
import { LoginPage } from './login.page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const renderWithStore = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const store = setupStore({
    auth: {
      isLoggedIn,
      user: null,
      loading: false,
      error: null,
    },
  });

  return render(
    <ReactRedux.Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </ReactRedux.Provider>
  );
};

describe('LoginPage', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (ReactRouterDom.useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it('should stay in login page if user is not logged in', () => {
    renderWithStore({ isLoggedIn: false });

    expect(navigate).toHaveBeenCalledTimes(0);
  });

  it('should redirect to home if the user is logged in', () => {
    renderWithStore({ isLoggedIn: true });

    expect(navigate).toHaveBeenCalledWith('/');
  });
});
