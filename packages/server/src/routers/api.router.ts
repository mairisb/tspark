import express from 'express';
import { authRouter } from './auth.router';
import { gameRouter } from './game.router';
import { userRouter } from './user.router';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/games', gameRouter);
