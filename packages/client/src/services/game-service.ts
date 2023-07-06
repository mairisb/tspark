import { GameDto } from '@thegame/common';
import axios from 'axios';

export class GameService {
  static getGames(): Promise<GameDto[]> {
    return axios
      .get('http://localhost:3333/api/games')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  }
}
