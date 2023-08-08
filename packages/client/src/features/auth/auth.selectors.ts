import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../core/store';

const selectAuth = (state: RootState) => state.auth;

const selectIsLoggedIn = createSelector(
  selectAuth,
  (authState) => authState.isLoggedIn
);

const selectLoading = createSelector(
  selectAuth,
  (authState) => authState.loading
);

const selectError = createSelector(selectAuth, (authState) => authState.error);

const selectUser = createSelector(selectAuth, (authState) => authState.user);

export const authSelectors = {
  selectAuth,
  selectIsLoggedIn,
  selectLoading,
  selectError,
  selectUser,
};
