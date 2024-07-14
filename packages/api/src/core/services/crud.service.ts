import { injectable } from 'inversify';
import { FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { mapper } from '../auto-mapper/mapper';
import { IBaseEntity } from '../db/base.entity.type';
import { ICrudService } from './crud.service.type';

@injectable()
export abstract class CrudService<E extends IBaseEntity & ObjectLiteral, EDto>
  implements ICrudService<EDto>
{
  abstract repository: Repository<E>;

  protected abstract getEntityClass(): new () => E;
  protected abstract getEntityDtoClass(): new () => EDto;

  async find(id: number) {
    const entity = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<E>);

    if (!entity) {
      return null;
    }

    const entityDto = mapper.map(
      entity,
      this.getEntityClass(),
      this.getEntityDtoClass(),
    );

    return entityDto;
  }

  async findAll() {
    const entities = await this.repository.find();

    const entityDtos = mapper.mapArray(
      entities,
      this.getEntityClass(),
      this.getEntityDtoClass(),
    );

    return entityDtos;
  }

  async create(entityDto: EDto) {
    const entity = mapper.map(
      entityDto,
      this.getEntityDtoClass(),
      this.getEntityClass(),
    );

    return await this.repository.insert(entity);
  }

  async update(id: number, entityDto: EDto) {
    const entity = mapper.map(
      entityDto,
      this.getEntityDtoClass(),
      this.getEntityClass(),
    );

    return await this.repository.update(id, entity);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
