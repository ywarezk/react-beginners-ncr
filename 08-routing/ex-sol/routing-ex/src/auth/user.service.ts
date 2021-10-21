/**
 * Interact with the user api
 */

import { User } from "./user.model";
import axios from 'axios';

class UserService {
	async login(emailPassword: {email: string, password: string}): Promise<User> {
		const response = await axios.post<User>('https://academeez-login-ex.herokuapp.com/api/users/login', emailPassword);
		return response.data;
	}
}

export const userService = new UserService();