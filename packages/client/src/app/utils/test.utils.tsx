import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends RenderOptions {}

export const renderWithProviders = (
  ui: React.ReactElement,
  { ...renderOptions }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <MemoryRouter>{children}</MemoryRouter>;
  };

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
