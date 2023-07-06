import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;
}
