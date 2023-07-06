import express from 'express';
import UserController from '../controllers/user.controller';

const UserRouter = express.Router();

UserRouter.get('/', UserController.getAll);

export default UserRouter;
