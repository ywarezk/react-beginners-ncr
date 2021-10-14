/**
 * Display a picture of Pigletshvily and Sweetness
 */
 
import pigletSweetness from './piglet-sweetness.jpeg';
 
export function MyDogs() {
	const myClickFunction = () => {
		// debugger;
		console.log('my dogs')
	}
	
	return (
		<img onClick={myClickFunction} alt="My Dogs" height="200" src={pigletSweetness} />
	)
}