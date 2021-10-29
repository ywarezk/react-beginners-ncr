/**
 * this component contains a form for the user to enter his
 * name in the input field
 */

import { FC, FormEvent, useRef } from "react";
import { useFormik } from 'formik';
import { myNameValidationSchema } from './name.validation';

 
export const MyName: FC = () => {
	/**
	 * 
	 * @param values - object that contains the form values
	 * default form event: send a request based on method (default GET ) and action (default: . - here)
	 * 
	 */
	const handleNameSubmit = (values: { yourName : string, igal: string}) => {
		console.log(values)
	}
	
	const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
		initialValues: {
			yourName: 'Pigletshvily',
			igal: 'initial igal value'
		},
		onSubmit: handleNameSubmit,
		validationSchema: myNameValidationSchema
	});	
	
	
	// form submit -----> formik handle submit ------> your handleNameSubmit
	// input change -----> formik handleChange
	return (
		<form onSubmit={handleSubmit}>
			<input 
				name="yourName"
				type="text" 
				placeholder="Enter your name"	
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.yourName}
			/>
			<br/>
			<p>
				{ errors.yourName }
			</p>
			
			<input
				name="igal"
				type="text"
				placeholder="Enter your name"
				onChange={handleChange}
				onBlur={handleBlur}
				value={values.igal}
			/>
			<br />
			<p>
				{errors.igal}
			</p>
			<button type="submit">
				Submit your name
			</button>
		</form>
	)
}