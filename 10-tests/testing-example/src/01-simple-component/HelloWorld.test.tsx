/**
 * Testing the HelloWorld component
 * JEST is a toolbox for writing tests
 * describe - represents a group of tests
 * it/test - represents a single test
 */
 
import { HelloWorld } from './HelloWorld';
import { render, screen } from '@testing-library/react';
 
describe('<HelloWorld />', () => {
	
	// place your tests here
	
	it('check that component shows hello world message', () => {
		// the actual test
		
		render(<HelloWorld />);
		const h1 = screen.getByTestId('hello');
		expect(h1.textContent).toEqual('Hello world');
	})
	
})