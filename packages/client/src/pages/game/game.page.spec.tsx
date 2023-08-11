import { renderWithProviders } from '../../utils/test.utils';
import { GamePage } from './game.page';

describe('Game', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<GamePage />);
    expect(baseElement).toBeTruthy();
  });
});
