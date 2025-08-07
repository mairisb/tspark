import { AutoMap } from '@automapper/classes';
import { BaseDto } from './base.dto';
import { UserDto } from './user.dto';

export class CardDto extends BaseDto {
  @AutoMap()
  name: string;

  @AutoMap()
  user: UserDto;
}
