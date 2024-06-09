import { Game } from './game.entity';

export class GameServiceMock {
  getAll = () => {
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
  };
}
