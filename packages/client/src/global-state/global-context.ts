import { createContext } from 'react';
import GlobalState from './global-state';
import initialGlobalState from './initial-global-state';

export const GlobalContext = createContext<{
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
}>({
  state: initialGlobalState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
});
