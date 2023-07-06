import appDataSource from '../config/app-data-source';
import Game from '../models/game.model';

const gameRepository = appDataSource.getRepository(Game);

const getAll = () => {
  return gameRepository.find();
};

const gameService = {
  getAll,
};

export default gameService;
