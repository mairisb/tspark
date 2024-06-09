import { renderWithProviders } from '../../../utils/test.utils';
import { HomePage } from './home.page';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
