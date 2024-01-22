import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../core/root.store';
import { Page } from '../page';

export const HomePage: React.FC = observer(() => {
  const { authStore } = useRootStore();

  return (
    <Page title="Home">
      <p>{`Hello${
        authStore.isAuthenticated ? `, ${authStore.user?.username}` : ''
      }! :)`}</p>
    </Page>
  );
});
