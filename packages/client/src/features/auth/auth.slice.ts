import { UserDto } from '@jspark/common';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.initial-state';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    registerSuccess: (state, action: PayloadAction<UserDto>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<UserDto>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    authCheckSuccess: (state, action: PayloadAction<UserDto>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
