import { render } from '@testing-library/react';

import { Host } from './host.page';

describe('Host', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Host />);
    expect(baseElement).toBeTruthy();
  });
});
