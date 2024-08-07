import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
} from 'inversify-express-utils';
import { Services } from '../../core/di/di.identifiers';
import { IUserService } from './user.service.type';

@controller('/user')
export class UserController extends BaseHttpController {
  constructor(@inject(Services.User) private userService: IUserService) {
    super();
  }

  @httpGet('/')
  public async getAll() {
    const users = this.userService.getAll();
    return this.json(users);
  }
}
