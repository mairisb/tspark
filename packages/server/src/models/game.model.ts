import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  players: number;
}
