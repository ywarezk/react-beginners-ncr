import { FC, useState } from "react";
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
import { useFormik } from 'formik';
import { loginSchema } from './login.validation';
import { userService } from '../user.service';
import { User } from "../user.model";

export const Login: FC = () => {
	const [user, setUser] = useState<User | null>(null);
	const [errorMessage, setErrorMessage] = useState('')

	const formik = useFormik({
		validationSchema: loginSchema,
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: async (values) => {
			try {
				const user = await userService.login(values);
				setUser(user);
				setErrorMessage('');
			} catch(err: any) {
				setErrorMessage(err.message);
				setUser(null);
			}			
		}
	})

	return (
		<Card className={styles.card}>
			<CardHeader title="Login" className={styles.header} />
			<form noValidate onSubmit={formik.handleSubmit}>
				<CardContent>
					<div className={styles.textFieldWrapper}>
						<TextField
							className={styles.textField}
							type="email"
							name="email"
							placeholder="johndoe@ncr.com" label="Enter your email"
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
					</div>
					<div className={styles.textFieldWrapper}>
						<TextField
							className={styles.textField}
							type="password"
							name="password"
							placeholder="******"
							label="Enter your password"
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</div>
				</CardContent>
				<CardActions className={styles.actions}>
					<Button color="primary" variant="contained" type="submit">Login</Button>
				</CardActions>
				{
					user && (
						<Alert severity="success">
							Hello {user.firstName} {user.lastName}
						</Alert>
					)
				}
				{
					errorMessage && (
						<Alert severity="error">
							{errorMessage}
						</Alert>
					)
				}
			</form>
		</Card>
	)
}