import { AutoMap } from '@automapper/classes';
import { UserDto } from './user.dto';

export class CardDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  user: UserDto;
}
