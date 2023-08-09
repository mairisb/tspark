import { apiSlice } from '../../features/auth/api.slice';
import { Page } from '../page';

export const HomePage: React.FC = () => {
  apiSlice.useAuthCheckQuery();
  return (
    <Page title="Home">
      <p>{'Hello :)'}</p>
    </Page>
  );
};
