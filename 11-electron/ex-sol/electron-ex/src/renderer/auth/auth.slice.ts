
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './user.model';
import { userService } from './user.service';

export interface AuthState {
	user: User | null,
	errorMessage: string
}

export const login = createAsyncThunk(
	'auth/login',
	async (emailPassword: { email: string, password: string }) => {
		try {
			const user = await userService.login(emailPassword);
			return {
				user,
				errorMessage: ''
			}
		} catch(err: any) {
			return {
				user: null,
				errorMessage: err.message
			}
		}
	}
)

export const authSlice = createSlice<AuthState, any>({
	name: 'auth',
	initialState: {
		user: null,
		errorMessage: ''
	},
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.errorMessage = action.payload.errorMessage;
		})
	}
})

