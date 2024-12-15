import { AutoMap } from '@automapper/classes';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  name: string;

  @ManyToOne(() => User, (user) => user.cards)
  @AutoMap()
  user: User;
}
