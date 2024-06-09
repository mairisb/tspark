import { appDataSource } from '../../core/app-data-source';
import { Card } from './card.entity';

export const cardRepository = appDataSource.getRepository(Card);
