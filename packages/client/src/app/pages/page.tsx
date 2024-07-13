import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../core/config';
import { useRootStore } from '../../core/root.store';
import { observer } from 'mobx-react-lite';

export interface PageProps extends React.PropsWithChildren {
  isAuthProtected?: boolean;
  title: string;
}

export const Page: React.FC<PageProps> = observer(
  ({ isAuthProtected = false, title, children }) => {
    const { authStore } = useRootStore();

    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthProtected && !authStore.isAuthenticated) {
        navigate('/auth/login');
      }
    }, [isAuthProtected, authStore.isAuthenticated, navigate]);

    useEffect(() => {
      document.title = `${config.appName} - ${title}`;
      return () => {
        document.title = config.appName;
      };
    }, [title]);

    if (!isAuthProtected || (isAuthProtected && authStore.isAuthenticated)) {
      return (
        <main>
          <h1 data-testid="page-title">{title}</h1>
          {children && <section>{children}</section>}
        </main>
      );
    }
  },
);
