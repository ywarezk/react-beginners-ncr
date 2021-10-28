/**
 * This is the component used for the layout header
 */
 
import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import pigletSweetness from './piglet-sweetness.jpeg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { User, authUserSelector } from '../../../auth';
 
export const Header: FC = () => {
	const user = useSelector<State, User | null>(authUserSelector);
	
	return (
		<AppBar>
			<Toolbar className={styles.toolbar}>
				<Link to="/">
					<img 
						alt="logo"
						src={pigletSweetness} 
						className={styles.headerImg}
					/>
				</Link>
				<h3 data-testid="greeting">
					Hello {user ? user.firstName : 'Guest'}
				</h3>
				<Typography>
					Login
				</Typography>
			</Toolbar>
		</AppBar>
	)
}