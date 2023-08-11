import express from 'express';
import { authController } from './auth.controller';

export const authRouter = express.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/auth-check', authController.authCheck);
