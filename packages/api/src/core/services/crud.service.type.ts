import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

export interface ICrudService<EDto> {
  find(id: string): Promise<EDto | null>;
  findAll(): Promise<EDto[]>;
  create(dto: EDto): Promise<InsertResult>;
  update(id: string, dto: EDto): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
}
