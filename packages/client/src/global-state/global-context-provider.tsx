import React, { useState } from 'react';
import { GlobalContext } from './global-context';
import { initialGlobalState } from './initial-global-state';

export const GlobalContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const [state, setState] = useState(initialGlobalState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
