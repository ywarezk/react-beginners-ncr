/**
 * This is the component used for the layout header
 */
 
import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import pigletSweetness from './piglet-sweetness.jpeg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { User } from '../../../auth';
 
export const Header: FC<{user: User | undefined}> = ({
	user = {firstName: 'Guest'}
}) => {
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
				<h3>
					Hello {user.firstName}
				</h3>
				<Typography>
					Login
				</Typography>
			</Toolbar>
		</AppBar>
	)
}