import 'reflect-metadata';

import CssBaseline from '@mui/material/CssBaseline';
import { Provider as InversifyProvider } from 'inversify-react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { container } from './core/inversify.config';
import { setupStore } from './core/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <InversifyProvider container={container}>
        <Provider store={store}>
          <App />
        </Provider>
      </InversifyProvider>
    </BrowserRouter>
  </StrictMode>,
);
