import { AutoMap } from '@automapper/classes';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../core/db/base.entity';
import { User } from '../user/user.entity';

@Entity()
export class Card extends BaseEntity {
  @Column()
  @AutoMap()
  name: string;

  @ManyToOne(() => User, (user) => user.cards)
  @AutoMap()
  user: User;
}
