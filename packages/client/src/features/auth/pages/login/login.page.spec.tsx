import { act, fireEvent, screen } from '@testing-library/react';
import { UserDto } from '@tspark/common';
import { useNavigate } from 'react-router-dom';
import { authClient } from '../../auth.client';
import { renderWithProviders } from '../../../../utils/test.utils';
import { LoginPage } from './login.page';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../features/auth/auth.service', () => ({
  authService: {
    login: jest.fn(),
  },
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
    (authClient.login as jest.Mock).mockResolvedValue({
      id: 1,
      username: 'johnd',
      email: 'john.doe@mail.com',
    } as UserDto);

    renderWithProviders(<LoginPage />);

    await doLogin();

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it.skip('should stay in login page after an unsuccessful login', async () => {
    // TODO: mock login failure

    renderWithProviders(<LoginPage />);

    await doLogin();

    expect(navigate).not.toHaveBeenCalled();
  });
});
