import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Page } from './page';

jest.mock('../config/config', () => ({
  config: {
    APP_NAME: 'MockAppName',
  },
}));

describe('Page', () => {
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
      </Page>
    );

    expect(screen.getByText('Test child')).toBeInTheDocument();
  });
});
