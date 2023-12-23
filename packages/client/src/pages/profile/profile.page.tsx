import { observer } from 'mobx-react-lite';
import { Page } from '../page';

export const ProfilePage: React.FC = observer(() => {
  return <Page title="Profile" isAuthProtected></Page>;
});
