import 'reflect-metadata';

import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { NotificationProvider } from './app/components/notifications/NotificationProvider';
import { setupStore } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
