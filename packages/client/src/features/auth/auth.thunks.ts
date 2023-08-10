import { LoginRequest, RegisterRequest } from "@tspark/common";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "./api.slice";
import { authActions } from "./auth.slice";

const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (req: RegisterRequest, { dispatch, rejectWithValue }) => {
    try {
      const user = await dispatch(
        apiSlice.endpoints.register.initiate(req)
      ).unwrap();
      dispatch(authActions.setUser(user));
      return { success: true, user };
    } catch (err) {
      console.error("Registration Error:", err);
      return rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (req: LoginRequest, { dispatch, rejectWithValue }) => {
    try {
      const user = await dispatch(
        apiSlice.endpoints.login.initiate(req)
      ).unwrap();
      dispatch(authActions.setUser(user));
      return { success: true, user };
    } catch (err) {
      console.error("Login Error:", err);
      return rejectWithValue(err);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await dispatch(apiSlice.endpoints.logout.initiate()).unwrap();
      dispatch(authActions.clearUser());
      return { success: true };
    } catch (err) {
      console.error("Logout Error:", err);
      return rejectWithValue(err);
    }
  }
);

export const authCheck = createAsyncThunk(
  "auth/authCheck",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { isAuthenticated, user } = await dispatch(
        apiSlice.endpoints.authCheck.initiate()
      ).unwrap();
      if (isAuthenticated && user) {
        dispatch(authActions.setUser(user));
        return { success: true, user };
      }
    } catch (err) {
      console.error("Auth Check Error:", err);
      return rejectWithValue(err);
    }
  }
);

export const authThunks = {
  registerUser,
  loginUser,
  logoutUser,
  authCheck,
};
