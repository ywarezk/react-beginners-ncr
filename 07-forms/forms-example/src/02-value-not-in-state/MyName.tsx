/**
 * this component contains a form for the user to enter his
 * name in the input field
 */

import { FC, FormEvent, useRef } from "react";

 
export const MyName: FC = () => {
	// { current: something saved in memory }
	const inputRef = useRef<any>();
	
	/**
	 * 
	 * @param event - event object describes the event that currently happened
	 * default form event: send a request based on method (default GET ) and action (default: . - here)
	 * 
	 */
	const handleNameSubmit = (event: FormEvent) => {
		console.log('handling form name submit');
		console.log(inputRef.current.value);
		event.preventDefault();
	}
	
	return (
		<form onSubmit={handleNameSubmit}>
			<input 
				name="your-name"
				type="text" 
				placeholder="Enter your name"
				ref={inputRef}
			/>
			<button type="submit">
				Submit your name
			</button>
		</form>
	)
}