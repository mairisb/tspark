import { renderWithProviders } from '../../utils/test.utils';
import { ProfilePage } from './profile.page';

describe('Profile', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<ProfilePage />);
    expect(baseElement).toBeTruthy();
  });
});
