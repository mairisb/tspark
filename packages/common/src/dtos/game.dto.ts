import { AutoMap } from '@automapper/classes';

export class GameDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  players: number;
}
