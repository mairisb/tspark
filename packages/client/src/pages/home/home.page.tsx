import { observer } from 'mobx-react-lite';
import { useStore } from '../../core/root.store';
import { Page } from '../page';

export const HomePage: React.FC = observer(function HomePage() {
  const { authStore } = useStore();

  return (
    <Page title="Home">
      <p>{`Hello${
        authStore.isAuthenticated ? `, ${authStore.user?.username}` : ''
      }! :)`}</p>

      <button type="button" onClick={() => authStore.authCheck()}>
        CLICK ME
      </button>
    </Page>
  );
});
