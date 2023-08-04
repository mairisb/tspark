import { render } from '@testing-library/react';

import { GamePage } from './game.page';

describe('Game', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GamePage />);
    expect(baseElement).toBeTruthy();
  });
});
