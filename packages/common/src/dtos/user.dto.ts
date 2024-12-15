import { AutoMap } from '@automapper/classes';
import { CardDto } from './card.dto';

export class UserDto {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  cards: CardDto[];
}
