/**
 * Testing the HelloWorld component
 * JEST is a toolbox for writing tests
 * describe - represents a group of tests
 * it/test - represents a single test
 */
 
import { Toggle } from './Toggle';
import { render, screen, fireEvent } from '@testing-library/react';
 
describe('<HelloWorld /> - with props', () => {
	
	it('the message is displayed - toggled when button is clicked', () => {
		const { debug } = render(<Toggle />);
		debug();
		expect(screen.getByTestId('message')).toBeInTheDocument();
		const button = screen.getByTestId('toggleButton');
		fireEvent.click(button);
		debug();
		
		// getBy - will throw exception if not found
		// queryBy - will return null if not found
		expect(screen.queryByTestId('message')).not.toBeInTheDocument();
	})
})