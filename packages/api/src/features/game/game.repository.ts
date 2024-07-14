import { appDataSource } from '../../core/db/app-data-source';
import { Game } from './game.entity';

export const gameRepository = appDataSource.getRepository(Game);
