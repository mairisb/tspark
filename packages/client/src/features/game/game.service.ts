import { GameDto } from '@tspark/common';
import { axiosInstance } from '../../core/api/axios.instance';

export class GameService {
  static getGames(): Promise<GameDto[]> {
    return axiosInstance
      .get('games')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  }
}
