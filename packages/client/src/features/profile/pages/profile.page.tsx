import { observer } from 'mobx-react-lite';
import { Page } from '../../../app/pages/page';

export const ProfilePage: React.FC = observer(() => {
  return <Page title="Profile" isAuthProtected></Page>;
});
