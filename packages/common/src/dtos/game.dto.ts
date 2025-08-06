import { AutoMap } from '@automapper/classes';
import { BaseDto } from './dto.base';

export class GameDto extends BaseDto {
  @AutoMap()
  name: string;

  @AutoMap()
  players: number;
}
