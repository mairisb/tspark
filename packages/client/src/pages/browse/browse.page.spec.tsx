import { renderWithProviders } from '../../utils/test.utils';
import { BrowsePage } from './browse.page';

describe('Browse', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<BrowsePage />);
    expect(baseElement).toBeTruthy();
  });
});
