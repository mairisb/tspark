import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

export interface ICrudService<EDto> {
  find(id: number): Promise<EDto | null>;
  findAll(): Promise<EDto[]>;
  create(dto: EDto): Promise<InsertResult>;
  update(id: number, dto: EDto): Promise<UpdateResult>;
  delete(id: number): Promise<DeleteResult>;
}
