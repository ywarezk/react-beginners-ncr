/**
 * Display a picture of Pigletshvily and Sweetness
 */
 
import pigletSweetness from './piglet-sweetness.jpeg';
// {'dogsImage': 'sdfgasdfasdf-sfasdf'}
import style from './MyDogs.module.scss';


/* 
React.createElement()
*/
export function MyDogs() {
	const myClickFunction = () => {
		// debugger;
		console.log('my dogs')
	}
	
	// background-color, border-radius
	return (
		<img
			className={style.dogsImage}
			style={ {height: '50px', width: '100px', backgroundColor: 'red'} } 
			onClick={myClickFunction} 
			alt="My Dogs" 
			height="200" 
			src={pigletSweetness} 
		/>
	)
}