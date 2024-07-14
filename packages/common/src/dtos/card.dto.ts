import { AutoMap } from '@automapper/classes';

export class CardDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;
}
