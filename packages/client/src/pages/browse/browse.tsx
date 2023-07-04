import { useEffect, useState } from 'react';
import { Page } from '../page';
import { GameService } from '../../services/game-service';

/* eslint-disable-next-line */
export interface BrowseProps {}

export function Browse(props: BrowseProps) {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    GameService.getGames().then(setGames);
  }, []);
  return (
    <Page title="Browse">
      {games.map((game: any) => (
        <p>{`${game.name} (${game.players})`}</p>
      ))}
    </Page>
  );
}

export default Browse;
