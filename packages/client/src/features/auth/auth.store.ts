import { LoginRequest, RegisterRequest, UserDto } from '@tspark/common';
import { makeAutoObservable } from 'mobx';
import { RootStore } from '../../core/root.store';
import { authService } from './auth.service';

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

  init = async () => {
    await this.authCheck();
  };

  register = async (req: RegisterRequest) => {
    const user = await authService.register(req);
    if (user) {
      this.isAuthenticated = true;
      this.user = user;
    } else {
      this.isAuthenticated = false;
      this.user = undefined;
    }
  };

  login = async (req: LoginRequest) => {
    const user = await authService.login(req);
    if (user) {
      this.isAuthenticated = true;
      this.user = user;
    } else {
      this.isAuthenticated = false;
      this.user = undefined;
    }
  };

  logout = async () => {
    await authService.logout();
    this.isAuthenticated = false;
    this.user = undefined;
  };

  authCheck = async () => {
    const authCheckResponse = await authService.authCheck();
    this.isAuthenticated = authCheckResponse.isAuthenticated;
    this.user = authCheckResponse.user;
  };
}
