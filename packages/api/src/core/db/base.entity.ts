import { AutoMap } from '@automapper/classes';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;
}
