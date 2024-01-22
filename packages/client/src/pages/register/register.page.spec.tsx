import { act, fireEvent, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
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
    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('E-mail');
    const passwordInput = screen.getByLabelText('Password');
    const registerButton = screen.getByRole('button', { name: 'Register' });

    await act(() => {
      fireEvent.change(usernameInput, {
        target: { value: 'johnd' },
      });
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
    renderWithProviders(<RegisterPage />);

    await doRegister();

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should stay in register page after unsuccessful registration', async () => {
    renderWithProviders(<RegisterPage />);

    await doRegister();

    expect(navigate).not.toHaveBeenCalled();
  });
});
