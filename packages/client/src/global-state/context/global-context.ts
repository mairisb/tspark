import { createContext } from 'react';
import { GlobalState } from '../global-state';
import { initialGlobalState } from '../initial-global-state';
import { GlobalReducerAction } from '../reducer/global-reducer-action';

export const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalReducerAction>;
}>({
  state: initialGlobalState,
  dispatch: () => null,
});
