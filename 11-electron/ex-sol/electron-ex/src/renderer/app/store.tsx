/**
 * Create the store here
 */

import { configureStore } from '@reduxjs/toolkit';
import { authSlice, AuthState } from '../auth';

export interface State {
	auth: AuthState
}

export const createStore = ( preloadedState?: State ) => {
	return configureStore<State>({
		reducer: {
			auth: authSlice.reducer
		},
		...(preloadedState && { preloadedState })
	})
}