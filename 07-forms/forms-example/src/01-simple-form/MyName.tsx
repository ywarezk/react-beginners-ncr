/**
 * this component contains a form for the user to enter his
 * name in the input field
 */

import { FC, FormEvent, useState, ChangeEvent } from "react";

 
export const MyName: FC = () => {
	const [name, setName] = useState('Pigletshvily');
	
	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		// what the user entered in the text field
		setName(event.target.value);
		
		
	}
	
	
	/**
	 * 
	 * @param event - event object describes the event that currently happened
	 * default form event: send a request based on method (default GET ) and action (default: . - here)
	 * 
	 */
	const handleNameSubmit = (event: FormEvent) => {
		console.log('handling form name submit');
		event.preventDefault();
		
		console.log(name);
	}
	
	return (
		<form onSubmit={handleNameSubmit}>
			<input 
				name="your-name"
				type="text" 
				placeholder="Enter your name"
				value={name}
				onChange={handleNameChange}
			/>
			<button type="submit">
				Submit your name
			</button>
		</form>
	)
}