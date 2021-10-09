import { FC } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from './Login.module.scss';


export const Login: FC = () => {
	return (
		<Card className={styles.card}>
			<CardHeader title="Login" className={styles.header} />
			<form>
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
			</form>
		</Card>		
	)
}