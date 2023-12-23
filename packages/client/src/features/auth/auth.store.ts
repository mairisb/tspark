import { UserDto } from '@tspark/common';
import { RootStore } from '../../core/root.store';
import { authService } from './auth.service';
import { action, makeAutoObservable } from 'mobx';

export class AuthStore {
  private rootStore: RootStore;

  private _isAuthenticated: boolean = false;
  private _user?: UserDto;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  set isAuthenticated(isAuthenticated: boolean) {
    this._isAuthenticated = isAuthenticated;
  }

  get user() {
    return this._user;
  }

  set user(user: UserDto | undefined) {
    this._user = user;
  }

  init() {
    this.authCheck();
  }

  authCheck() {
    authService.authCheck().then((authCheckResponse) => {
      this.isAuthenticated = authCheckResponse.isAuthenticated;
      this.user = authCheckResponse.user;
    });
  }
}
