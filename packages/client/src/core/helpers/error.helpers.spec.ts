import { errorHelpers } from './error.helpers';

describe('getErrorMessage', () => {
  it('should return a default message if the error is not an instance of Error and no default message is provided', () => {
    const error = { some: 'object' };
    expect(errorHelpers.getErrorMessage(error)).toBe(
      'An unexpected error occurred.'
    );
  });

  it('should return the error message if error is an instance of Error', () => {
    const error = new Error('Some specific error');
    expect(errorHelpers.getErrorMessage(error)).toBe('Some specific error');
  });

  it('should return the provided default message if the error is not an instance of Error', () => {
    const error = { some: 'object' };
    expect(errorHelpers.getErrorMessage(error, 'Custom default message')).toBe(
      'Custom default message'
    );
  });

  it('should return the default message if the error is null or undefined', () => {
    expect(errorHelpers.getErrorMessage(null)).toBe(
      'An unexpected error occurred.'
    );
    expect(errorHelpers.getErrorMessage(undefined)).toBe(
      'An unexpected error occurred.'
    );
  });
});
