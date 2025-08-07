import { AutoMap } from '@automapper/classes';
import { BaseDto } from './base.dto';
import { CardDto } from './card.dto';

export class UserDto extends BaseDto {
  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  cards: CardDto[];
}
