import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../core/config';
import { useStore } from '../core/root.store';
import { observer } from 'mobx-react-lite';

export interface PageProps extends React.PropsWithChildren {
  isAuthProtected?: boolean;
  title: string;
}

export const Page: React.FC<PageProps> = observer(
  ({ isAuthProtected = false, title, children }) => {
    const { authStore } = useStore();

    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthProtected && !authStore.isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthProtected, authStore.isAuthenticated, navigate]);

    useEffect(() => {
      document.title = `${config.TSPARK_APP_APP_NAME} - ${title}`;
      return () => {
        document.title = config.TSPARK_APP_APP_NAME;
      };
    }, [title]);

    if (!isAuthProtected || (isAuthProtected && authStore.isAuthenticated)) {
      return (
        <main>
          <h1 data-testid="page-title">{title}</h1>
          {children && <main>{children}</main>}
        </main>
      );
    }
  },
);
