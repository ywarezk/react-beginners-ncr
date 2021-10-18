/**
 * This component will start with off
 * upon button click will toggle off <-> on
 
 
 OFF   ---------->
 ON   	<--------
 
 
 */

import { FC, useState } from "react";

 
// const hello: string = 'hello world';
// const hello = 'hello world'
// <img src="javascript:"
// 
 
// {  }
export const OffOn: FC = () => {
	// s0
	// [ offOrOn, setOffOn ]
	const arrayOfState = useState(false);
	// true or false
	const offOrOn = arrayOfState[0]
	const setOffOn = arrayOfState[1];
	
	const [user, setUser] = useState<string | null>(null)
	// const oldOOnOff = 'hello'
	
	/*
	if (condition){
		const [anotherBoolean, setAnotherBoolean] = useState(true)
	}
	*/
	
	const handleToggle = () => {
		console.log('user clicked the button');
		// setOffOn(!offOrOn);
		setOffOn((oldOnOff) => {
			return !oldOnOff;
		});
		
		// setUser('Dor');
	}
	
	// setUser()
	
	return (
		<div>
			<h1>
				{ offOrOn ? 'ON' : 'OFF' }
				{/* {userInput} */}
			</h1>
			<button onClick={ handleToggle }>
				Toggle
			</button>
		</div>		
	)
}