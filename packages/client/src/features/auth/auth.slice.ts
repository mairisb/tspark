import { UserDto } from "@tspark/common";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./auth.initial-state";

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDto>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
