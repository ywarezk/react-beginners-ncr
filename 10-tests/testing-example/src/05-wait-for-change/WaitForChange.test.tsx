import { render, waitFor, screen } from "@testing-library/react"
import { WaitForChange } from "./WaitForChange"


describe('<WaitForChange />', () => {
	
	it('after timeout', async () => {
		render(<WaitForChange />);
		await waitFor(() => {
			
			// throw exception
			expect(screen.getByTestId('changedObject').textContent).toEqual('First value: 2');
			
		});
		expect(screen.getByTestId('changedObject').textContent).toEqual('First value: 2');
	})
})