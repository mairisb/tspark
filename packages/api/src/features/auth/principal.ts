import { UserDto } from '@tspark/common';
import { interfaces } from 'inversify-express-utils';

export class Principal implements interfaces.Principal {
  public details: UserDto;

  constructor(userDetails?: UserDto) {
    if (userDetails) {
      this.details = userDetails;
    }
  }

  public isAuthenticated(): Promise<boolean> {
    return Promise.resolve(!!this.details);
  }

  public isResourceOwner(resourceId: any): Promise<boolean> {
    // TODO: add resource mechanics
    return Promise.resolve(!!this.details);
  }

  public isInRole(role: string): Promise<boolean> {
    // TODO: add role mechanics
    return Promise.resolve(!!this.details);
  }
}
