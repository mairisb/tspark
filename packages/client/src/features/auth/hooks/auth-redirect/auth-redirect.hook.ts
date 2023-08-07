import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from '../..';

export const useAuthRedirect = (path = '/') => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(path);
    }
  }, [isLoggedIn, navigate, path]);
};
