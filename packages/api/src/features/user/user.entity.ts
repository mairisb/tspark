import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Auth } from '../auth/auth.entity';
import { AutoMap } from '@automapper/classes';

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
}
