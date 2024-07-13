import 'reflect-metadata';

import CssBaseline from '@mui/material/CssBaseline';
import { Provider as InversifyProvider } from 'inversify-react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { container } from './core/inversify.config';
import { RootStore, RootStoreContext } from './core/root.store';

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
        <InversifyProvider container={container}>
          <App />
        </InversifyProvider>
      </RootStoreContext.Provider>
    </BrowserRouter>
  </StrictMode>,
);
