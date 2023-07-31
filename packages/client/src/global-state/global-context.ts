import { createContext } from 'react';
import { GlobalState } from './global-state';
import { initialGlobalState } from './initial-global-state';
import { GlobalReducerAction } from './global-reducer';

export const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalReducerAction>;
}>({
  state: initialGlobalState,
  dispatch: () => null,
});
