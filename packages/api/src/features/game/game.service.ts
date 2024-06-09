import { injectable } from 'inversify';
import { gameRepository } from './game.repository';
import { IGameService } from './game.service.type';

@injectable()
export class GameService implements IGameService {
  findAll() {
    return gameRepository.find();
  }
}
