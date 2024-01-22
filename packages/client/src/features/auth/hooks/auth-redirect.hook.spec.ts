import { renderHook } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAuthRedirect } from './auth-redirect.hook';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('useAuthRedirect', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it('redirects to the specified path when the user is logged in', () => {
    renderHook(() => useAuthRedirect('/test'));

    expect(navigate).toHaveBeenCalledWith('/test');
  });

  it('does not redirect when the user is not logged in', () => {
    renderHook(() => useAuthRedirect('/test'));

    expect(navigate).not.toHaveBeenCalled();
  });
});
