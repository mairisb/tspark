import { renderWithProviders } from '../../../app/utils/test.utils';
import { GamePage } from './game.page';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<GamePage />);
    expect(baseElement).toBeTruthy();
  });
});
