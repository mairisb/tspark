const getErrorMessage = (
  error: unknown,
  defaultMsg = 'An unexpected error occurred.',
): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return defaultMsg;
};

export const errorHelpers = {
  getErrorMessage,
};
