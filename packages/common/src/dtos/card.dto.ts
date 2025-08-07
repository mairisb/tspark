import { AutoMap } from '@automapper/classes';
import { UserDto } from './user.dto';
import { BaseDto } from './base.dto';

export class CardDto extends BaseDto {
  @AutoMap()
  name: string;

  @AutoMap()
  user: UserDto;
}
