import { decorate, injectable } from 'inversify';
import { apiClient } from './api.client';
import { ICrudClient as IClient } from './crud.client.type';

@injectable()
export abstract class CrudClient<T> implements IClient<T> {
  abstract readonly RESOURCE_NAME: string;

  async get(id: number): Promise<T | null> {
    try {
      const res = await apiClient.get(`${this.RESOURCE_NAME}/${id}`);
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async getAll(): Promise<T[]> {
    try {
      const res = await apiClient.get(this.RESOURCE_NAME);
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async create(item: T): Promise<void> {
    try {
      await apiClient.post(this.RESOURCE_NAME, item);
    } catch (err) {
      console.error(err);
    }
  }

  async update(item: T): Promise<void> {
    try {
      await apiClient.put(this.RESOURCE_NAME, item);
    } catch (err) {
      console.error(err);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await apiClient.delete(`${this.RESOURCE_NAME}/${id}`);
    } catch (err) {
      console.error(err);
    }
  }
}
