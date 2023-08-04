import { render } from '@testing-library/react';

import { Browse } from './browse.page';

describe('Browse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Browse />);
    expect(baseElement).toBeTruthy();
  });
});
