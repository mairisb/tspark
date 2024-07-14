import { InsertResult, UpdateResult } from 'typeorm';

export interface ICrudService<EDto> {
  findById(id: number): Promise<EDto | null>;
  findAll(): Promise<EDto[]>;
  create(entityDto: EDto): Promise<InsertResult>;
  update(id: number, entityDto: EDto): Promise<UpdateResult>;
}
