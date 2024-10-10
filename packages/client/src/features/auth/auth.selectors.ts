import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const selectAuth = (state: RootState) => state.auth;

const selectIsLoggedIn = createSelector(
  selectAuth,
  (authState) => authState.isLoggedIn,
);

const selectUser = createSelector(selectAuth, (authState) => authState.user);

export const authSelectors = {
  selectAuth,
  selectIsLoggedIn,
  selectUser,
};
