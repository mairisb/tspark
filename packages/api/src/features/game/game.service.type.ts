import { Game } from './game.entity';

export interface IGameService {
  findAll(): Promise<Game[]>;
}
