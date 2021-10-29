import { FC, useEffect } from "react";
import {
	TextField,
	Button,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Alert
} from '@mui/material';
import { useFormik } from 'formik';
import { loginSchema } from './login.validation';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../auth.slice';
import { State } from "../../app/store";
import { authErrorSelector, authUserSelector, User } from "..";
import { useHistory } from 'react-router-dom';

const styles = require('./Login.module.scss').default;

export const Login: FC = () => {
	const dispatch = useDispatch();
	const errorMessage = useSelector<State, string>(authErrorSelector);
	const user = useSelector<State, User | null>(authUserSelector);
	const history = useHistory()

	const formik = useFormik({
		validationSchema: loginSchema,
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: async (values) => {
			dispatch(login(values));
		}
	});

	useEffect(() => {
		if (user) {
			history.push('/todo')
		}
	}, [ user ]);

	return (
		<Card className={styles.card}>
			<CardHeader title="Login" className={styles.header} />
			<form data-testid="loginForm" noValidate onSubmit={formik.handleSubmit}>
				<CardContent>
					<div className={styles.textFieldWrapper}>
						<TextField
							data-testid="emailInput"
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
							data-testid="passwordInput"
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
