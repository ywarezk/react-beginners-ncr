import { UIEvent } from 'react';

export function HelloWorld() {
	const handleButtonClick = (event: UIEvent, msg: string) => {
		console.log('hello button click ' + msg);
	}
	
	return (
		<button onClick={function (event) { handleButtonClick(event, 'hellow world')} }>
			click me
		</button>
	)
}