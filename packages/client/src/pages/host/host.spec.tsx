import { render } from '@testing-library/react';

import { Host } from './host';

describe('Host', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Host />);
    expect(baseElement).toBeTruthy();
  });
});
