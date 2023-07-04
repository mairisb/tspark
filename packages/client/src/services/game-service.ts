import axios from 'axios';

export class GameService {
  static getGames(): Promise<any[]> {
    return axios
      .get('http://localhost:3333/games')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  }
}
