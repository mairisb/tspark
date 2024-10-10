import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { config } from '../config';
import { authSelectors } from '../../features/auth/auth.selectors';

export interface PageProps extends React.PropsWithChildren {
  isAuthProtected?: boolean;
  title: string;
}

export const Page: React.FC<PageProps> = ({
  isAuthProtected = false,
  title,
  children,
}) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthProtected && !isLoggedIn) {
      navigate('/auth/login');
    }
  }, [isAuthProtected, isLoggedIn, navigate]);

  useEffect(() => {
    document.title = `${config.appName} - ${title}`;
    return () => {
      document.title = config.appName;
    };
  }, [title]);

  if (!isAuthProtected || (isAuthProtected && isLoggedIn)) {
    return (
      <main>
        <h1 data-testid="page-title">{title}</h1>
        {children && <section>{children}</section>}
      </main>
    );
  }
};
