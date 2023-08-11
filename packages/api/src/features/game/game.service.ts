import { appDataSource } from '../../core/app-data-source';
import { Game } from './game.model';

const gameRepository = appDataSource.getRepository(Game);

const getAll = () => {
  return gameRepository.find();
};

export const gameService = {
  getAll,
};
