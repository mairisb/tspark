import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../core/db/base.entity';

@Entity()
export class Auth extends BaseEntity {
  @Column()
  hashedPassword: string;
}
