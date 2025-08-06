import { ErrorResponse } from '@tspark/common';
import { Response } from 'express';
import {
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
  requestParam,
  response,
} from 'inversify-express-utils';
import { ICrudService } from '../services/crud.service.type';
import { BaseController } from './base.controller';

export abstract class CrudController<EDto> extends BaseController {
  protected abstract getService(): ICrudService<EDto>;

  private get service() {
    return this.getService();
  }

  @httpGet('/:id')
  protected async find(
    @requestParam('id') id: string,
    @response() res: Response<EDto | null | ErrorResponse>,
  ) {
    const entity = await this.service.find(id);

    this.httpContext;

    if (!entity) {
      return res.status(404).json({
        error: `No entity found with id: ${id}`,
      });
    }

    return res.status(200).json(entity);
  }

  @httpGet('/')
  protected async findAll(@response() res: Response<EDto[]>) {
    const entities = await this.service.findAll();
    return res.status(200).json(entities);
  }

  @httpPost('/')
  protected async create(@requestBody() dto: EDto, @response() res: Response) {
    try {
      await this.service.create(dto);
      return res.status(200).send();
    } catch (e) {
      console.error('Entity creation failed:', e);
      return res.status(400).json({ error: 'Entity creation failed' });
    }
  }

  @httpPut('/:id')
  protected async update(
    @requestParam('id') id: string,
    @requestBody() dto: EDto,
    @response() res: Response<ErrorResponse>,
  ) {
    try {
      const updateResult = await this.service.update(id, dto);

      if (!updateResult.affected) {
        console.error(`Entity update failed. No entity found with id: ${id}`);
        return res.status(404).json({
          error: `Entity update failed. No entity found with id: ${id}`,
        });
      }

      return res.status(200).send();
    } catch (e) {
      console.error('Entity update failed:', e);
      return res.status(400).json({ error: 'Entity update failed' });
    }
  }

  @httpDelete('/:id')
  protected async delete(
    @requestParam('id') id: string,
    @response() res: Response<ErrorResponse>,
  ) {
    try {
      const deleteResult = await this.service.delete(id);

      if (!deleteResult.affected) {
        console.error(`Entity delete failed. No entity found with id: ${id}`);
        return res.status(404).json({
          error: `Entity delete failed. No entity found with id: ${id}`,
        });
      }

      return res.status(200).send();
    } catch (e) {
      console.error('Entity delete failed:', e);
      return res.status(400).json({ error: 'Entity delete failed' });
    }
  }
}
