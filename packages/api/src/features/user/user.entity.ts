import { AutoMap } from '@automapper/classes';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../core/db/base.entity';
import { Auth } from '../auth/auth.entity';
import { Card } from '../card/card.entity';

@Entity()
export class User extends BaseEntity {
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
