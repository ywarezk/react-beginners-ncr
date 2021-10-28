/**
 * Testing the following on the login component
 * - validation
 * - success login
 * - failed login
 */
 
import { Login } from './Login';
import { render, screen, RenderResult, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, State } from '../../app/store';
import { MemoryRouter } from 'react-router-dom';
import { userService } from '../user.service';
import { Store } from 'redux';

const mockHistory = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({push: mockHistory})
}));

const mockUser = {
	id: 1,
	firstName: 'Yariv',
	lastName: 'Katz',
	email: 'no@no.no',
	token: 'yello'
}
 
describe('<Login />', () => {
	let rtlBag: RenderResult;
	let store: Store<State> 
	
	const _submitForm = (email: string, password: string) => {
		const { container } = rtlBag;
		const emailInput: HTMLInputElement = container.querySelector('input[name="email"]') as HTMLInputElement;
		fireEvent.change(emailInput, { target: { value: email } });
		const passwordInput: HTMLInputElement = container.querySelector('input[name="password"]') as HTMLInputElement;
		fireEvent.change(passwordInput, { target: { value: password } });
		const loginForm = screen.getByTestId('loginForm');
		fireEvent.submit(loginForm);
	}
	
	beforeEach(() => {
		store = createStore();
		rtlBag = render(
			<Provider store={ store }>
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			</Provider>
		)
		userService.login = jest.fn();
	})
	
	/**
	 * test that client validation works
	 * and on invalid user input there is no server request sent
	 */
	it('test validation', async () => {
		const { container } = rtlBag;
		_submitForm('invalid-email', '123');
		await waitFor(() => expect(container.querySelector('.Mui-error')).not.toBeNull())
		expect(container.querySelectorAll('p.Mui-error').length).toBe(2);
		expect(userService.login).not.toBeCalled();
	});
	
	/**
	 * test success login
	 * check that routing works and redux is updated with the user
	 */
	it('success login', async () => {
		(userService.login as jest.Mock).mockResolvedValue(mockUser);
		_submitForm('successful@login.com', '12345678');
		await waitFor(() => {
			expect(store.getState().auth.user).not.toBeNull()
		});
		expect(mockHistory.mock.calls).toEqual([['/todo']]);
	});
	
	it('fail login', async () => {
		(userService.login as jest.Mock).mockRejectedValue(new Error('something happened'));
		_submitForm('bad@credentials.com', '12345678');
		const { container, debug } = rtlBag;
		await waitFor(() => {
			expect(container.querySelector('.MuiAlert-message')).not.toBeNull()
		});
		expect(container.querySelector('.MuiAlert-message')?.textContent).toBe('something happened')
	});
})