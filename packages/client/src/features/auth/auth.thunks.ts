import { LoginRequest, RegisterRequest } from '@jspark/common';
import { AppThunk } from '../../store';
import { authService } from './auth.service';
import { authActions } from './auth.slice';

const registerUser =
  (req: RegisterRequest): AppThunk =>
  async (dispatch) => {
    dispatch(authActions.registerStart());
    try {
      const user = await authService.register(req);
      dispatch(authActions.registerSuccess(user));
    } catch (error) {
      // dispatch(authActions.registerFailure(error.toString()));
      dispatch(authActions.registerFailure('Registration failed.'));
    }
  };

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
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
};
