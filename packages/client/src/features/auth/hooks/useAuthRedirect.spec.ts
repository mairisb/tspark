import { renderHook } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuthRedirect } from './useAuthRedirect';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

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
    (useSelector as jest.Mock).mockReturnValue(true);

    renderHook(() => useAuthRedirect('/test'));

    expect(navigate).toHaveBeenCalledWith('/test');
  });

  it('does not redirect when the user is not logged in', () => {
    (useSelector as jest.Mock).mockReturnValue(false);

    renderHook(() => useAuthRedirect('/test'));

    expect(navigate).not.toHaveBeenCalled();
  });
});
