import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { Provider } from 'react-redux';
import { setupStore } from './core/store';
import { RootStore, StoreContext } from './core/root.store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const rootStore = new RootStore();
const store = setupStore();

root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={rootStore}>
        <Provider store={store}>
          <App />
        </Provider>
      </StoreContext.Provider>
    </BrowserRouter>
  </StrictMode>,
);
