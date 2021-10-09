/**
 * This is the root component of our component tree
 */

import styles from './App.module.scss';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Login } from './Login/Login';
import Grid from '@material-ui/core/Grid';

export function App() {
	return (
		<div className={styles.app}>
			<Header />
			<Grid 
				className={styles.grid}
				container 
				justifyContent="center" 
				alignItems="center"
			>
				<Grid xs={12} md={8} lg={4}>
					<div className={styles.loginWrapper}>
						<Login />
					</div>
				</Grid>
			</Grid>			
			<Footer />
		</div>
	);
}
