import { LoginRequest, RegisterRequest } from '@jspark/common';
import { AppThunk } from '../../store';
import { authService } from './auth.service';
import { authActions } from './auth.slice';
import { errorHelpers } from '../../core/helpers/error.helpers';

const registerUser =
  (req: RegisterRequest): AppThunk =>
  async (dispatch) => {
    dispatch(authActions.registerStart());
    try {
      const user = await authService.register(req);
      dispatch(authActions.registerSuccess(user));
    } catch (error) {
      const errorMsg = errorHelpers.getErrorMessage(error);
      dispatch(authActions.registerFailure(errorMsg));
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
      const errorMsg = errorHelpers.getErrorMessage(error);
      dispatch(authActions.loginFailure(errorMsg));
    }
  };

const logoutUser = (): AppThunk => async (dispatch) => {
  dispatch(authActions.logoutStart());
  try {
    await authService.logout();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    const errorMsg = errorHelpers.getErrorMessage(error);
    dispatch(authActions.logoutFailure(errorMsg));
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
    const errorMsg = errorHelpers.getErrorMessage(error);
    dispatch(authActions.authCheckFailure(errorMsg));
  }
};

export const authThunks = {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
};
