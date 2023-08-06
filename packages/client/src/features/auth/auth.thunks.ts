import { LoginRequest } from '@jspark/common';
import { authService } from '../../services/auth.service';
import { AppThunk } from '../../store';
import { authActions } from './auth.slice';

const loginUser =
  (req: LoginRequest): AppThunk =>
  async (dispatch) => {
    dispatch(authActions.loginStart());
    try {
      const user = await authService.login(req);
      dispatch(authActions.loginSuccess(user));
    } catch (error) {
      // dispatch(authActions.loginFailure(error.toString()));
      dispatch(authActions.loginFailure('Login failed.'));
    }
  };

const logoutUser = (): AppThunk => async (dispatch) => {
  dispatch(authActions.logoutStart());
  try {
    await authService.logout();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    // dispatch(authActions.logoutFailure(error.toString()));
    dispatch(authActions.logoutFailure('Logout failed.'));
  }
};

const authCheck = (): AppThunk => async (dispatch) => {
  dispatch(authActions.loginStart());
  try {
    const { isAuthenticated, user, error } = await authService.authCheck();
    if (isAuthenticated && user) {
      dispatch(authActions.authCheckSuccess(user));
    } else {
      dispatch(authActions.authCheckFailure(error));
    }
  } catch (error) {
    // dispatch(authActions.authCheckFailure(error.toString()));
    dispatch(authActions.authCheckFailure());
  }
};

export const authThunks = {
  loginUser,
  logoutUser,
  authCheck,
};
