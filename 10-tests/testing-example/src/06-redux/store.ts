import { configureStore, createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null
	},
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		}
	}
})

/**
 * you can create the store with an initial state
 * @param preloadedState 
 * @returns 
 */
export const createStore = (preloadedState: any) => {
	return configureStore({
		reducer: {
			auth: userSlice.reducer
		},
		preloadedState
	})
}