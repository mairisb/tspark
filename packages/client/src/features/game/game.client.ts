import { GameDto } from '@tspark/common';
import { apiClient } from '../../core/api-client/api.client';

export class GameClient {
  static getGames(): Promise<GameDto[]> {
    return apiClient
      .get('games')
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  }
}
