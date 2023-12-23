import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Page } from './page';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

jest.mock('../core/config', () => ({
  config: {
    TSPARK_APP_APP_NAME: 'MockAppName',
  },
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Page', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it('should render page title', () => {
    render(<Page title="Test title" />);
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle.textContent).toEqual('Test title');
  });

  it('should set document title on mount and reset on unmount', () => {
    const { unmount } = render(<Page title="Test title" />);
    expect(document.title).toEqual('MockAppName - Test title');
    unmount();
    expect(document.title).toEqual('MockAppName');
  });

  it('should render children', () => {
    render(
      <Page title="Test title">
        <span>Test child</span>
      </Page>,
    );
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });

  it('should redirect to /login if the page is auth protected and user is not logged in', () => {
    (useSelector as jest.Mock).mockReturnValue(false);
    render(<Page title="Test title" isAuthProtected />);
    expect(navigate).toHaveBeenCalledWith('/login');
  });

  it('should not redirect if the page is auth protected and user is logged in', () => {
    (useSelector as jest.Mock).mockReturnValue(true);
    render(<Page title="Test title" isAuthProtected />);
    expect(navigate).not.toHaveBeenCalled();
  });

  it("should not redirect if the page is not auth protected, irrespective of user's authentication status", () => {
    (useSelector as jest.Mock).mockReturnValue(false);
    render(<Page title="Test title" />);
    expect(navigate).not.toHaveBeenCalled();

    (useSelector as jest.Mock).mockReturnValue(true);
    render(<Page title="Test title" />);
    expect(navigate).not.toHaveBeenCalled();
  });
});
