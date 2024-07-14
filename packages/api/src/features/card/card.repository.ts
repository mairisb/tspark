import { appDataSource } from '../../core/db/app-data-source';
import { Card } from './card.entity';

export const cardRepository = appDataSource.getRepository(Card);
