import express from 'express';
import { AuthController } from './auth.controller';

export const authRouter = express.Router();

const authController = new AuthController();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/auth-check', authController.authCheck);
