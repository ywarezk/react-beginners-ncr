/**
 * component when the component is born
 * starts a interval timer
 * every second the component increments a number
 
 <Counter initialCounter={10} />
 
 */

import { FC, useState, useEffect } from "react";

 
export const Counter: FC<{initialCounter?: number}> = ({
	initialCounter = 0
}) => {
	const [ counter, setCounter ] = useState(initialCounter);
	
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
		
		const intervalId = setInterval(() => {
			// setCounter(counter + 1);
			setCounter((oldCounter) => {
				return oldCounter + 1
			});
		}, 1000);
		
		/**
		 * how many times does this function run and when?
		 * it runs multiple times!!!!
		 * if empty array will clean once when component is destroyed
		 * if not empty array will clean previous useEffect function call before calling the next one
		 */
		return () => {
			clearInterval(intervalId);
		}
		
	}, 
	// when the component is born
	[]
	)
	
	/**
	 * of you do not supply array
	 * function will run multiple times
	 * setState
	 * parent trnasfer different props
	 */
	useEffect(() => {
		console.log('this will run after each render')
	});
	
	/**
	 * will call the function multiple times
	 * not on each render
	 * on specific renders
	 * state variable counter is changed
	 */
	useEffect(() => {
		return () => {
			
		}
	}, [
		// counter,
		initialCounter
	])
	
	useEffect(() => {
		return () => {
			console.log('additional cleaning');
		}
	}, [])
	
	return (
		<h1>
			{ counter }
		</h1>
	)
}