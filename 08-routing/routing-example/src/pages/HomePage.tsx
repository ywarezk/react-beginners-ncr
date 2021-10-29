/**
 * this component should be displayed only in the url: /
 
 if (){
	const [] = useState()
 }
 	
 
 const [] = useState()
 
 */
 
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
 
export const HomePage: FC = () => {
	const history = useHistory();
	
	const handleRedirect = () => {
		// i want to direct the user to the about page
		
		// this is wrong
		// const history = useHistory();
		
		history.push('/about');
	}
	
	return (
		<div>
			<h1>
				Hello we are currently in the homepage
			</h1>
			<button onClick={handleRedirect}>
				Clicking this should redirect to /about
			</button>
		</div>
		
	)
}