import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { Provider } from 'react-redux';
import { setupStore } from './core/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
