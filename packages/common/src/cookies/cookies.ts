import { CookieKeys } from './cookie-keys.enum';

export interface ICookies {
  [CookieKeys.AuthToken]: string;
}
