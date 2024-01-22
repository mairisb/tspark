import { renderHook } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAuthRedirect } from './auth-redirect.hook';
import { RootStore, useRootStore } from '../../../core/root.store';
import { AuthStore } from '../auth.store';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../core/root.store', () => ({
  ...jest.requireActual('../../../core/root.store'),
  useRootStore: jest.fn(),
}));

describe('useAuthRedirect', () => {
  let navigate: jest.Mock;

  beforeEach(() => {
    navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it('redirects to the specified path when the user is logged in', () => {
    const rootStore = new RootStore();
    rootStore.authStore.isAuthenticated = true;
    (useRootStore as jest.Mock).mockReturnValue(rootStore);

    renderHook(() => useAuthRedirect('/test'));

    expect(navigate).toHaveBeenCalledWith('/test');
  });

  it('does not redirect when the user is not logged in', () => {
    const rootStore = new RootStore();
    rootStore.authStore.isAuthenticated = false;
    (useRootStore as jest.Mock).mockReturnValue(rootStore);

    renderHook(() => useAuthRedirect('/test'));

    expect(navigate).not.toHaveBeenCalled();
  });
});
