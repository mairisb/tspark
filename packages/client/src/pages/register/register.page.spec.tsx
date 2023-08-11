import { renderWithProviders } from '../../utils/test.utils';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<RegisterPage />);
    expect(baseElement).toBeTruthy();
  });
});
