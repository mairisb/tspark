import { render } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import { HostPage } from './host.page';
import { setupStore } from '../../core/store';
import { MemoryRouter } from 'react-router-dom';

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
        <HostPage />
      </MemoryRouter>
    </ReactRedux.Provider>
  );
};

describe('Host', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithStore();
    expect(baseElement).toBeTruthy();
  });
});
