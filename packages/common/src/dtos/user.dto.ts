import { AutoMap } from '@automapper/classes';
import { CardDto } from './card.dto';
import { BaseDto } from './dto.base';

export class UserDto extends BaseDto {
  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  cards: CardDto[];
}
