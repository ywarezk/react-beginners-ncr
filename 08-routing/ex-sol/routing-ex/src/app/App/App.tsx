/**
 * This is the root component of our component tree
 */

import styles from './App.module.scss';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Login } from '../../auth';
import { Grid } from '@mui/material';
import { TodoList } from '../../todo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Header />
				<Grid
					className={styles.grid}
					container
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={12} md={8} lg={4}>
						<div className={styles.loginWrapper}>
							<Switch>
								<Route path="/" exact>
									<Login />
								</Route>
								<Route path="/todo">
									<TodoList />
								</Route>
							</Switch>							
						</div>
					</Grid>
				</Grid>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
