import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Auth } from '../auth/auth.entity';
import { Card } from '../card/card.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ unique: true })
  @AutoMap()
  username: string;

  @Column({ unique: true })
  @AutoMap()
  email: string;

  @OneToOne(() => Auth, { cascade: true })
  @JoinColumn()
  auth: Auth;

  @OneToMany(() => Card, (card) => card.user)
  @AutoMap()
  cards: Card[];
}
