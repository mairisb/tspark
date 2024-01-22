import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RootStore, RootStoreContext } from '../core/root.store';

interface ExtendedRenderOptions extends RenderOptions {
  rootStore?: RootStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { rootStore = new RootStore(), ...renderOptions }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <RootStoreContext.Provider value={rootStore}>
        <MemoryRouter>{children}</MemoryRouter>
      </RootStoreContext.Provider>
    );
  };

  return {
    store: rootStore,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
