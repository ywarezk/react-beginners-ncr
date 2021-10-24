/**
 * this component contains a form for the user to enter his
 * name in the input field
 */

import { FC, FormEvent, useRef } from "react";

 
export const MyName: FC = () => {
	/**
	 * 
	 * @param event - event object describes the event that currently happened
	 * default form event: send a request based on method (default GET ) and action (default: . - here)
	 * 
	 */
	const handleNameSubmit = () => {
	}
	
	return (
		<form onSubmit={handleNameSubmit}>
			<input 
				name="your-name"
				type="text" 
				placeholder="Enter your name"				
			/>
			<button type="submit">
				Submit your name
			</button>
		</form>
	)
}