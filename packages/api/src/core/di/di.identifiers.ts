export const Middleware = {
  Auth: Symbol.for('AuthMiddleware'),
};

export const Repository = {
  Card: Symbol.for('ICardRepository'),
};

export const Services = {
  Auth: Symbol.for('IAuthService'),
  Card: Symbol.for('ICardService'),
  User: Symbol.for('IUserService'),
};
