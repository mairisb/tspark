import { ICookies } from '@tspark/common';
import { BaseHttpController } from 'inversify-express-utils';

export class BaseController extends BaseHttpController {
  public get cookies() {
    return (this.httpContext.request.cookies ?? {}) as ICookies;
  }
}
