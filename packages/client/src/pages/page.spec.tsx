import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { RootStore } from '../core/root.store';
import { renderWithProviders } from '../utils/test.utils';
import { Page } from './page';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe('Page', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it('should render page title', () => {
    renderWithProviders(<Page title="Test title" />);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle.textContent).toEqual('Test title');
  });

  it('should set document title on mount and reset on unmount', () => {
    const { unmount } = renderWithProviders(<Page title="Test title" />);

    expect(document.title).toEqual('TSpark - Test title');

    unmount();
    expect(document.title).toEqual('TSpark');
  });

  it('should render children', () => {
    renderWithProviders(
      <Page title="Test title">
        <span>Test child</span>
      </Page>,
    );

    expect(screen.getByText('Test child')).toBeInTheDocument();
  });

  it('should redirect to /login if the page is auth protected and user is not logged in', () => {
    const rootStore = new RootStore();
    rootStore.authStore.isAuthenticated = false;

    renderWithProviders(<Page title="Test title" isAuthProtected />, {
      rootStore,
    });

    expect(navigate).toHaveBeenCalledWith('/login');
  });

  it('should not redirect if the page is auth protected and user is logged in', () => {
    const rootStore = new RootStore();
    rootStore.authStore.isAuthenticated = true;

    renderWithProviders(<Page title="Test title" isAuthProtected />, {
      rootStore,
    });

    expect(navigate).not.toHaveBeenCalled();
  });

  it("should not redirect if the page is not auth protected, irrespective of user's authentication status", () => {
    const rootStore = new RootStore();

    rootStore.authStore.isAuthenticated = false;
    renderWithProviders(<Page title="Test title" />, { rootStore });
    expect(navigate).not.toHaveBeenCalled();

    rootStore.authStore.isAuthenticated = true;
    renderWithProviders(<Page title="Test title" />, { rootStore });
    expect(navigate).not.toHaveBeenCalled();
  });
});
