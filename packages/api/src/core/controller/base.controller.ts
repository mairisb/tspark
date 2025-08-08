import { ICookies } from '@tspark/common';
import { BaseHttpController } from 'inversify-express-utils';
import { Principal } from '../../features/auth/principal';

export class BaseController extends BaseHttpController {
  public get cookies() {
    return (this.httpContext.request.cookies ?? {}) as ICookies;
  }

  public get principal() {
    return this.httpContext.user as Principal;
  }
}
