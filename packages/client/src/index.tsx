import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { RootStore, RootStoreContext } from './core/root.store';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const rootStore = new RootStore();
rootStore.init();

root.render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <RootStoreContext.Provider value={rootStore}>
        <App />
      </RootStoreContext.Provider>
    </BrowserRouter>
  </StrictMode>,
);
