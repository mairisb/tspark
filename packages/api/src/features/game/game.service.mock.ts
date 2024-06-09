import { injectable } from 'inversify';
import { Game } from './game.entity';
import { IGameService } from './game.service.type';

@injectable()
export class GameServiceMock implements IGameService {
  findAll(): Promise<Game[]> {
    const games: Promise<Game[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Room1', players: 3 },
          { id: 2, name: 'Room2', players: 2 },
          { id: 3, name: 'Room3', players: 6 },
        ]);
      }, 300);
    });
    return games;
  }
}
