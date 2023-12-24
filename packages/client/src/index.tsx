import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { RootStore, StoreContext } from './core/root.store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const rootStore = new RootStore();

root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </StrictMode>,
);
