import { UserDto } from '@jspark/common';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.initial-state';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action: PayloadAction<UserDto>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
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
    authCheckStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    authCheckSuccess: (state, action: PayloadAction<UserDto>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    authCheckFailure: (state, action: PayloadAction<string | undefined>) => {
      state.loading = false;
      state.error = action.payload || 'Authentication failed.';
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
