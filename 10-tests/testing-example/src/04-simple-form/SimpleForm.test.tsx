/**
 * how to test forms
 */
 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SimpleForm } from './SimpleForm';
import axios, { AxiosResponse, AxiosError } from 'axios';


jest.mock('axios');
 
 
describe('<SimpleForm />', () => {
	beforeEach(() => {
		
	});
	
	// beforeAll()
	
	const _submitForm = (email: string) => {
		// enter an invalid email
		const emailInput: HTMLInputElement = screen.getByTestId('emailInput') as HTMLInputElement;
		// <input onChange={(event) => } 
		//event.target.value
		fireEvent.change(emailInput, {
			target: {
				value: email
			}
		});

		const button = screen.getByTestId('submit');
		fireEvent.click(button);
	}
	
	
	it('validation in client side works', async () => {
		const { debug } = render(<SimpleForm />);
		debug();
		
		_submitForm('invalid-email');
		
		await waitFor(() => screen.getByTestId('errorMessage'))
		
		const error = screen.getByTestId('errorMessage');
		expect(error.textContent).toEqual('Invalid email format')
		expect((axios.post as jest.Mock)).not.toHaveBeenCalled()
		
	})
	
	it('check good response from server', async () => {
		render(<SimpleForm />);
		
		// mockResolvedValue mocks a promise
		(axios.post as jest.Mock).mockResolvedValue({
			data: {
				firstName: 'Pigletshvily',
				lastName: 'Chaitovski'
			}
		} as AxiosResponse)
		
		_submitForm('yariv@nerdeez.com');
		
		await waitFor(() => screen.getByTestId('greetingUser'));
		
		expect(screen.getByTestId('greetingUser').textContent).toEqual('Hello Pigletshvily')
		expect((axios.post as jest.Mock)).toHaveBeenCalledTimes(1);
	});
	
	it('check good response from server', async () => {
		render(<SimpleForm />);
		
		// mockResolvedValue mocks a promise
		(axios.post as jest.Mock).mockRejectedValue(new Error('something happened'));

		_submitForm('yariv@nerdeez.com');

		await waitFor(() => screen.getByTestId('errorServer'));

		expect(screen.getByTestId('errorServer').textContent).toEqual('something happened')
	})
	
	
})