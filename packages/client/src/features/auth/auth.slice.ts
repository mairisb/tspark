import { UserDto } from '@jspark/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.loading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logoutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.loading = false;
    },
    logoutFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const authActions = authSlice.actions;

// export const loginUser =
//   (payload: LoginPayload): AppThunk =>
//   async (dispatch) => {
//     dispatch(loginStart());
//     try {
//       await login(payload);
//       dispatch(loginSuccess());
//     } catch (error) {
//       dispatch(loginFailure(error.toString()));
//     }
//   };

// export const logoutUser = (): AppThunk => async (dispatch) => {
//   dispatch(logoutStart());
//   try {
//     await logout();
//     dispatch(logoutSuccess());
//   } catch (error) {
//     dispatch(logoutFailure(error.toString()));
//   }
// };

export const authReducer = authSlice.reducer;
