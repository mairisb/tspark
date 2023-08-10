import { render } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../core/store';
import { App } from './app';

const renderWithStore = () => {
  const store = setupStore({
    auth: {
      isLoggedIn: false,
      user: null,
    },
  });

  return render(
    <ReactRedux.Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ReactRedux.Provider>
  );
};

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithStore();
    expect(baseElement).toBeTruthy();
  });
});
