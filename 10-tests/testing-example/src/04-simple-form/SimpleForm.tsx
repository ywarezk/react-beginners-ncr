

import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const emailFormSchema = yup.object().shape({
	email: yup.string().required('This field is required').email('Invalid email format')
})

export const SimpleForm: FC = () => {
	// User | null
	const [user, setUser] = useState<{firstName: string, lastName: string} | null>(null);
	const [errorMessage, setErrorMessage] = useState('');
	
	const handleSubmitMail = async (values: any) => {
		console.log(values);
		
		// {firstName: '...', lastName: '...', id: 1}
		try {
			const response = await axios.post('https://some-url/api/something', values);
			setUser(response.data);
		} catch(err) {
			setErrorMessage(err.message)
		}
		
	}
	
	return (
		<Formik
			initialValues={ {
				email: ''
			} }
			onSubmit={ handleSubmitMail }
			validationSchema={ emailFormSchema }
		>
			<Form>
				<Field 
					data-testid="emailInput"
					type="email"
					name="email"
					placeholder="enter your name"
				/>
				<ErrorMessage component="p" data-testid="errorMessage" name="email" />
				<button data-testid="submit" type="submit">Submit the form</button>
				
				{
					user && (
						<h3 data-testid="greetingUser">
							Hello {user.firstName}
						</h3>
					)
				}
				{
					errorMessage && (
						<h3 data-testid="errorServer">
							{errorMessage}
						</h3>
					)
				}
			</Form>
		</Formik>
	)
}