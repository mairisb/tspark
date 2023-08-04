import { useEffect, useState } from 'react';
import { GameService } from '../../services/game.service';
import { Page } from '../page';

export const BrowsePage: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    GameService.getGames().then(setGames);
  }, []);
  return (
    <Page title="Browse">
      {games.map((game: any, i: number) => (
        <p key={i}>{`${game.name} (${game.players})`}</p>
      ))}
    </Page>
  );
};
