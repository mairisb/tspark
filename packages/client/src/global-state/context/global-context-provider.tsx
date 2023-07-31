import React, { useReducer } from 'react';
import { initialGlobalState } from '../initial-global-state';
import { globalReducer } from '../reducer/global-reducer';
import { GlobalContext } from './global-context';

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
