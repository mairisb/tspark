import { renderWithProviders } from '../utils/test.utils';
import { App } from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithProviders(<App />);
    expect(baseElement).toBeTruthy();
  });
});
