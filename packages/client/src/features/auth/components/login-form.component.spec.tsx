import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test.utils';
import { LoginForm } from './login-form.component';

describe('LoginForm', () => {
  it('should render', () => {
    const { baseElement } = renderWithProviders(<LoginForm />);

    expect(baseElement).toBeInTheDocument();
  });

  it('should not submit when email and password are not provided', async () => {
    let handleSubmitMock = jest.fn();
    renderWithProviders(<LoginForm onSubmit={handleSubmitMock} />);

    const loginButton = screen.getByRole('button', { name: 'Log in' });

    await act(() => {
      fireEvent.click(loginButton);
    });

    expect(handleSubmitMock).not.toBeCalled();
  });

  it('should submit when email and password are provided', async () => {
    let handleSubmitMock = jest.fn();
    renderWithProviders(<LoginForm onSubmit={handleSubmitMock} />);

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

    expect(handleSubmitMock).toBeCalled();
  });
});
