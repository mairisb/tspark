import React, { useReducer, useState } from 'react';
import { GlobalContext } from './global-context';
import { initialGlobalState } from './initial-global-state';
import { globalReducer } from './global-reducer';

export const GlobalContextProvider: React.FC<React.PropsWithChildren> = (
  props
) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
