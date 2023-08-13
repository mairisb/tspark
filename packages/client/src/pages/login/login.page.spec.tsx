import { act, fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';
import { useNavigate } from 'react-router-dom';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../utils/test.utils';
import { LoginPage } from './login.page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('LoginPage', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  const doLogin = async () => {
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Log in' });

    await act(() => {
      fireEvent.change(emailInput, {
        target: { value: 'john.doe@mail.com' },
      });
      fireEvent.change(passwordInput, {
        target: { value: 'verysafepassword' },
      });
      fireEvent.click(loginButton);
    });
  };

  it('should redirect to home page after a successful login', async () => {
    server.use(
      rest.post('/auth/login', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{ id: 1, name: 'John Doe' }]));
      })
    );

    renderWithProviders(<LoginPage />);

    await doLogin();

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should stay in login page after an unsuccessful login', async () => {
    server.use(
      rest.post('/auth/login', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<LoginPage />);

    await doLogin();

    expect(navigate).not.toHaveBeenCalled();
  });
});
