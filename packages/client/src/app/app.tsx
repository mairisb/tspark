import { Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from './app.routes';
import { NavigationBar } from './components/navigation-bar/navigation-bar';

export const App: React.FC = observer(() => {
  const routes = useRoutes(appRoutes);

  return (
    <div>
      <NavigationBar />
      <Container fixed>{routes}</Container>
    </div>
  );
});
