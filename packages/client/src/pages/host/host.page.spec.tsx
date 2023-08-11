import { renderWithProviders } from '../../utils/test.utils';
import { HostPage } from './host.page';

describe('Host', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<HostPage />);
    expect(baseElement).toBeTruthy();
  });
});
