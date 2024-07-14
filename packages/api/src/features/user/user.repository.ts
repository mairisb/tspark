import { appDataSource } from '../../core/db/app-data-source';
import { User } from './user.entity';

export const userRepository = appDataSource.getRepository(User);
