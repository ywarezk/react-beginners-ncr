/**
 * Testing the HelloWorld component
 * JEST is a toolbox for writing tests
 * describe - represents a group of tests
 * it/test - represents a single test
 */
 
import { HelloWorld } from './HelloWorld';
import { render, screen } from '@testing-library/react';
 
describe('<HelloWorld /> - with props', () => {
	
	// place your tests here
	
	it('check that component shows hello guest when no prop is sent', () => {
		// the actual test
		render(<HelloWorld />);
		const h1 = screen.getByTestId('hello');
		expect(h1.textContent).toEqual('Hello Guest')
	});
	
	it('check that component shows hello with name', () => {
		// the actual test
		render(<HelloWorld name="Igal" />);
		const h1 = screen.getByTestId('hello');
		expect(h1.textContent).toEqual('Hello Igal')
	})
	
})