import express from 'express';
import { authRouter } from '../features/auth/auth.router';

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
