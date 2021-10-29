/**
 * Testing the following:
 * - if no user hello guest is displayed
 * - if there is user say hello to the user
 */
 
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../store';
import { Header } from './Header';
import { MemoryRouter } from 'react-router-dom';
 
describe('<Header />', () => {
	it('No user say hello to guest', () => {
		render(
			<Provider store={ createStore() }>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</Provider>
		)
		const h3 = screen.getByTestId('greeting');
		expect(h3.textContent).toEqual('Hello Guest')
	});
	
	it('with user say hello to the user', () => {
		render(
			<Provider store={ createStore({
				auth: {
					user: {
						firstName: 'Yariv',
						lastName: 'Katz',
						id: 1,
						email: 'no@no.no',
						token: 'hello world'
					},
					errorMessage: ''
				}
			}) }>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</Provider>
		)
		const h3 = screen.getByTestId('greeting');
		expect(h3.textContent).toEqual('Hello Yariv')
	})
});