import { LoginRequest, RegisterRequest } from '@tspark/common';
import bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { userRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

jest.mock('../user/user.repository');
jest.mock('bcrypt');

describe('authService', () => {
  const userService = new UserService();
  const authService = new AuthService(userService);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('register', () => {
    const registerRequest = {
      username: 'johnd',
      email: 'john.doe@mail.com',
      password: 'verysafepassword',
    } as RegisterRequest;

    it('should save the user', async () => {
      (userService.existsByEmail as jest.Mock).mockResolvedValue(false);
      (userRepository.save as jest.Mock).mockResolvedValue({} as User);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedpassword');

      await authService.register(registerRequest);

      expect(userRepository.save).toBeCalledWith({
        username: 'johnd',
        email: 'john.doe@mail.com',
        auth: {
          hashedPassword: 'hashedpassword',
        },
      });
    });

    it('should throw error if user already exists', async () => {
      (userService.existsByEmail as jest.Mock).mockResolvedValue(true);

      await expect(authService.register(registerRequest)).rejects.toThrow(
        'User already exists.',
      );
    });
  });

  describe('login', () => {
    const loginRequest = {
      email: 'john.doe@mail.com',
      password: 'verysafepassword',
    } as LoginRequest;

    const user = {
      username: 'johnd',
      email: 'john.doe@mail.com',
      auth: { hashedPassword: 'hashedpassword' },
    } as User;

    it('should log in', async () => {
      (userRepository.findOneOrFail as jest.Mock).mockResolvedValue(user);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await authService.login(loginRequest);

      expect(result).toEqual(user);
    });

    it('should throw error for incorrect password', async () => {
      (userRepository.findOneOrFail as jest.Mock).mockResolvedValue(user);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(authService.login(loginRequest)).rejects.toThrow(
        'Incorrect password.',
      );
    });
  });
});
