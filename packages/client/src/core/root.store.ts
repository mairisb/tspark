import { createContext, useContext } from 'react';
import { AuthStore } from '../features/auth/auth.store';

export class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore(this);

    this._init();
  }

  private _init() {
    this.authStore.init();
  }
}

export const StoreContext = createContext(new RootStore());
export const useStore = () => useContext(StoreContext);
