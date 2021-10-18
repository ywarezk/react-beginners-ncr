/**
 * component when the component is born
 * starts a interval timer
 * every second the component increments a number
 */

import { FC, useState, useEffect } from "react";

 
export const Counter: FC = () => {
	const [ counter, setCounter ] = useState(0);
	
	// do not do this
	// we are breaking the second law - no sideeffect when react is re-rendering
	/*
	setInterval(() => {
		setCounter(counter + 1);
	}, 1000)
	*/
	
	// gives me a gateway for certain component lifecycle events
	useEffect(() => {
		// this function will run once
		// after the first render
		
		setInterval(() => {
			// setCounter(counter + 1);
			setCounter((oldCounter) => {
				return oldCounter + 1
			});
		}, 1000);
		
	}, 
	// when the component is born
	[]
	)
	
	return (
		<h1>
			{ counter }
		</h1>
	)
}