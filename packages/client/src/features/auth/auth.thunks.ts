import { LoginRequest } from '@jspark/common';
import { authActions } from './auth.slice';
import { authService } from '../../services/auth.service';
import { AppThunk } from '../../store/state.types';

const loginUser =
  (req: LoginRequest): AppThunk =>
  async (dispatch) => {
    dispatch(authActions.loginStart());
    try {
      const user = await authService.login(req);
      dispatch(authActions.loginSuccess(user));
    } catch (error) {
      // dispatch(loginFailure(error.toString()));
      dispatch(authActions.loginFailure('Login failed.'));
    }
  };

const logoutUser = (): AppThunk => async (dispatch) => {
  dispatch(authActions.logoutStart());
  try {
    await authService.logout();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    // dispatch(logoutFailure(error.toString()));
    dispatch(authActions.logoutFailure('Logout failed.'));
  }
};

export const authThunks = {
  loginUser,
  logoutUser,
};
