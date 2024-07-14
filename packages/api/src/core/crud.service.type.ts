export interface ICrudService<EDto> {
  getById(id: number): Promise<EDto | null>;
  getAll(): Promise<EDto[]>;
  save(entityDto: EDto): Promise<EDto>;
}
