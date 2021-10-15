import { FC, FormEvent } from "react";
import { 
	TextField, 
	Button, 
	Card, 
	CardHeader,
	CardContent,
	CardActions,
	Alert
} from '@mui/material';
import styles from './Login.module.scss';

export const Login: FC = () => {
	let errorMessage = 'Something happened'
	
	/**
	 * This is called when the login event is submitted
	 * @param event 
	 */
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log('login event');
	}
	
	return (
		<Card className={styles.card}>
			<CardHeader title="Login" className={styles.header} />
			<form onSubmit={handleSubmit}>
				<CardContent>
					<div className={styles.textFieldWrapper}>
						<TextField 
							className={styles.textField}
							type="email" 
							placeholder="johndoe@ncr.com" label="Enter your email" 
						/>
					</div>
					<div className={styles.textFieldWrapper}>
						<TextField 
							className={styles.textField}
							type="password" 
							placeholder="******" 
							label="Enter your password" 
						/>
					</div>
				</CardContent>
				<CardActions className={styles.actions}>
					<Button color="primary" variant="contained" type="submit">Login</Button>
				</CardActions>
				{
					errorMessage && (
						<Alert severity="error">
							{ errorMessage }
						</Alert>
					)
				}
			</form>
		</Card>		
	)
}