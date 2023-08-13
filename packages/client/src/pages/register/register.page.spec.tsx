import { act, fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';
import { useNavigate } from 'react-router-dom';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../utils/test.utils';
import { RegisterPage } from './register.page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('RegisterPage', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  const doRegister = async () => {
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');
    const registerButton = screen.getByRole('button', { name: 'Register' });

    await act(() => {
      fireEvent.change(emailInput, {
        target: { value: 'john.doe@mail.com' },
      });
      fireEvent.change(passwordInput, {
        target: { value: 'verysafepassword' },
      });
      fireEvent.click(registerButton);
    });
  };

  it('should redirect to home page after successful registration', async () => {
    server.use(
      rest.post('/auth/register', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{ id: 1, name: 'John Doe' }]));
      }),
    );

    renderWithProviders(<RegisterPage />);

    await doRegister();

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should stay in register page after unsuccessful registration', async () => {
    server.use(
      rest.post('/auth/register', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    renderWithProviders(<RegisterPage />);

    await doRegister();

    expect(navigate).not.toHaveBeenCalled();
  });
});
