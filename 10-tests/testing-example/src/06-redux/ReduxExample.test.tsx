import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { ReduxExample } from "./ReduxExample"
import { createStore } from "./store"


describe('<ReduxExample />', () => {
	it('test with redux', () => {
		render(
			<Provider store={ createStore({
				auth: {
					user: {
						firstName: 'Sweetness',
						lastName: 'Fluffy belly'
					}
				}
			}) }>
				<ReduxExample />
			</Provider>			
		)
		expect(screen.getByTestId('greetingUser').textContent).toEqual('Sweetness');
	});
	
	it('click button', () => {
		const store = createStore({
			auth: {
				user: {
					firstName: 'Sweetness',
					lastName: 'Fluffy belly'
				}
			}
		})
		render(
			<Provider store={ store }>
				<ReduxExample />
			</Provider>
		)
		const button = screen.getByTestId('loginButton')
		fireEvent.click(button);
		expect((store.getState() as any).auth.user.firstName).toEqual('Pigletshvily');
	})
})