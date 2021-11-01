
import { FC, useEffect, useState } from 'react';

export const WaitForChange: FC = () => {
	const [counter, setCounter] = useState(1);
	
	useEffect(() => {
		
		setTimeout(() => {
			setCounter(2);
		}, 1000)
	}, [])
	
	return (
		<h1 data-testid="changedObject">
			First value: {counter}
		</h1>
	)
}