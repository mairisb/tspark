import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import { RegisterForm } from './register-form.component';

describe('RegisterForm', () => {
  it('should render', () => {
    const { baseElement } = renderWithProviders(<RegisterForm />);

    expect(baseElement).toBeInTheDocument();
  });

  it('should not submit when email and password are not provided', async () => {
    let handleSubmitMock = jest.fn();
    renderWithProviders(<RegisterForm onSubmit={handleSubmitMock} />);

    const registerButton = screen.getByRole('button', { name: 'Register' });

    await act(() => {
      fireEvent.click(registerButton);
    });

    expect(handleSubmitMock).not.toBeCalled();
  });

  it('should submit when email and password are provided', async () => {
    let handleSubmitMock = jest.fn();
    renderWithProviders(<RegisterForm onSubmit={handleSubmitMock} />);

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

    expect(handleSubmitMock).toBeCalled();
  });
});
