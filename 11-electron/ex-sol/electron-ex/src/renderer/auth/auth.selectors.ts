/**
 * The following selectors will help us select items from the auth state
 * while keeping performance in mind
 */

import { createSelector } from '@reduxjs/toolkit';

export const authSelector = (state: any) => state.auth;

export const authUserSelector = createSelector(
	authSelector,
	auth => auth.user
)

export const authErrorSelector = createSelector(
	authSelector,
	auth => auth.errorMessage
)
