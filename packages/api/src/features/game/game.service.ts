import { gameRepository } from './game.repository';

export class GameService {
  getAll = () => {
    return gameRepository.find();
  };
}
