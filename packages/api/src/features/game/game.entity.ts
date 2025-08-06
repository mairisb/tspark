import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core/db/base.entity';

@Entity()
export class Game extends BaseEntity {
  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  players: number;
}
