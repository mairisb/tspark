import express from 'express';
import userController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', userController.getAll);

export default userRouter;