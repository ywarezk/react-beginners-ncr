/**
 * Create the store here
 */
 
import { configureStore } from '@reduxjs/toolkit';
import { authSlice, AuthState } from '../auth';

export interface State {
	auth: AuthState
}

export const store = configureStore<State>({
	reducer: {
		auth: authSlice.reducer
	}
})