import { AutoMap } from '@automapper/classes';
import { BaseDto } from './base.dto';

export class GameDto extends BaseDto {
  @AutoMap()
  name: string;

  @AutoMap()
  players: number;
}
