import { LoginRequest, UserDto } from '@jspark/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';
import { authService } from '../../services/auth.service';

interface AuthState {
  isLoggedIn: boolean;
  user: UserDto | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<UserDto>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
    },
    logoutFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

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

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export const authThunks = {
  loginUser,
  logoutUser,
};
