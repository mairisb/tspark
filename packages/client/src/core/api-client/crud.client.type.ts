export interface ICrudClient<T> {
  get(id: number): Promise<T | null>;
  getAll(): Promise<T[]>;
  create(card: T): Promise<void>;
  update(card: T): Promise<void>;
  delete(id: number): Promise<void>;
}
