import express from 'express';
import { authRouter } from '../features/auth/auth.router';
import { gameRouter } from '../features/game/game.router';
import { userRouter } from '../features/user/user.router';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/games', gameRouter);
