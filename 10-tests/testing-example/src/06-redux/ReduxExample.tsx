

import { FC } from 'react';

/**

{
	auth: {
		user: {
			firstName: '',
			lastName: ''
		}
	}
}

 */
 
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from './store';

export const ReduxExample: FC = () => {
	const user = useSelector((state: any) => state.auth.user);
	const dispatch = useDispatch();
	
	const handleUserChange = () => {
		dispatch( (userSlice.actions as any).setUser({
			firstName: 'Pigletshvily',
			lastName: 'Chaitovski'
		}) );
	}
	
	return (
		<div>
			<h1 data-testid="greetingUser">
				{ user ? user.firstName : 'hello guest' }
			</h1>
			<button data-testid="loginButton" onClick={handleUserChange}>
				Change the user
			</button>
		</div>
	)
}