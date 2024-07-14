export const Middleware = {
  Auth: Symbol.for('AuthMiddleware'),
};

export const Services = {
  Auth: Symbol.for('IAuthService'),
  Card: Symbol.for('ICardService'),
  Game: Symbol.for('IGameService'),
  User: Symbol.for('IUserService'),
};
