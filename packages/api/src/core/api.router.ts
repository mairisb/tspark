import express from 'express';
import { authRouter } from '../features/auth/auth.router';
import { userRouter } from '../features/user/user.router';
import { cardRouter } from '../features/card/card.router';
import { authMiddleware } from '../features/auth/auth.middleware';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/card', authMiddleware.isAuthenticated, cardRouter);
