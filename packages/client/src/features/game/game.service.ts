import { GameDto } from "@tspark/common";
import { api } from "../../core/api";

export class GameService {
  static getGames(): Promise<GameDto[]> {
    return api
      .get("games")
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  }
}
