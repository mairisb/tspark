import { createContext, useContext } from 'react';
import { AuthStore } from '../features/auth/auth.store';

export class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore(this);
  }

  init = async () => {
    await this.authStore.init();
  };
}

export const RootStoreContext = createContext<RootStore>(null as any);
export const useRootStore = () => useContext(RootStoreContext);
