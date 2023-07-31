import React, { useState } from 'react';
import { GlobalContext } from './global-context';
import initialGlobalState from './initial-global-state';

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(initialGlobalState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}
