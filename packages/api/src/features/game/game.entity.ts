import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  players: number;
}
