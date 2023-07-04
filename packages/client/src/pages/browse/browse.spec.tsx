import { render } from '@testing-library/react';

import Browse from './browse';

describe('Browse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Browse />);
    expect(baseElement).toBeTruthy();
  });
});
