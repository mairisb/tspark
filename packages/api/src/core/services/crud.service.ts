import { injectable } from 'inversify';
import { FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { mapper } from '../auto-mapper/mapper';
import { IBaseEntity } from '../db/base.entity.type';
import { ICrudService } from './crud.service.type';

@injectable()
export abstract class CrudService<E extends IBaseEntity & ObjectLiteral, EDto>
  implements ICrudService<EDto>
{
  protected abstract repository: Repository<E>;

  protected abstract getEntityClass(): new () => E;
  protected abstract getEntityDtoClass(): new () => EDto;

  private get E() {
    return this.getEntityClass();
  }

  private get EDto() {
    return this.getEntityDtoClass();
  }

  async find(id: string) {
    const entity = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<E>);

    if (!entity) {
      return null;
    }

    const entityDto = mapper.map(entity, this.E, this.EDto);

    return entityDto;
  }

  async findAll() {
    const entities = await this.repository.find();

    const entityDtos = mapper.mapArray(entities, this.E, this.EDto);

    return entityDtos;
  }

  create(entityDto: EDto) {
    const entity = mapper.map(entityDto, this.EDto, this.E);

    return this.repository.insert(entity);
  }

  update(id: string, entityDto: EDto) {
    const entity = mapper.map(entityDto, this.EDto, this.E);

    return this.repository.update(id, entity);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}
