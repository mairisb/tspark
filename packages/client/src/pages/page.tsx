import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { config } from '../core/config';
import { authSelectors } from '../features/auth';

export interface PageProps extends React.PropsWithChildren {
  authProtected?: boolean;
  title: string;
}

export const Page: React.FC<PageProps> = ({
  authProtected: isAuthRequired = false,
  title,
  children,
}) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthRequired && !isLoggedIn) {
      navigate('/login');
    }
  }, [isAuthRequired, isLoggedIn, navigate]);

  useEffect(() => {
    document.title = `${config.APP_NAME} - ${title}`;
    return () => {
      document.title = config.APP_NAME;
    };
  }, [title]);

  if (!isAuthRequired || (isAuthRequired && isLoggedIn)) {
    return (
      <main>
        <h1 data-testid="page-title">{title}</h1>
        {children && <main>{children}</main>}
      </main>
    );
  }
};
