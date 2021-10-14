import TextField from '@mui/material/TextField';
import { MyDogs } from './MyDogs/MyDogs';

// React.createElement

export function Login() {
	return (
		<form>
			<TextField 
				type="email" 
				placeholder="yariv@nerdeez.com" 
				label="Enter your mail" 
			/>
			
			<MyDogs />
		</form>
	)
}