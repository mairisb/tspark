import { render } from '@testing-library/react';

import { BrowsePage } from './browse.page';

describe('Browse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowsePage />);
    expect(baseElement).toBeTruthy();
  });
});
