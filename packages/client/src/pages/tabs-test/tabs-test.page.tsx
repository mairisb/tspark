import { observer } from 'mobx-react-lite';
import { Page } from '../page';

export const TabsTestPage: React.FC = observer(() => {
  return (
    <Page title="Tabs Test">
      <p>This is the tabs test page</p>
    </Page>
  );
});
