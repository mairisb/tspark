import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRootStore } from '../../../core/root.store';

export const useAuthRedirect = (path = '/') => {
  const navigate = useNavigate();
  const { authStore } = useRootStore();

  useEffect(() => {
    if (authStore.isAuthenticated) {
      navigate(path);
    }
  }, [authStore.isAuthenticated, navigate, path]);
};
