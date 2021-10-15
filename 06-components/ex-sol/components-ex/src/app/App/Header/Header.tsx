/**
 * This is the component used for the layout header
 */
 
import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import pigletSweetness from './piglet-sweetness.jpeg';
import styles from './Header.module.scss';
 
export const Header: FC = () => {
	return (
		<AppBar>
			<Toolbar className={styles.toolbar}>
				<img 
					alt="logo"
					src={pigletSweetness} 
					className={styles.headerImg}
				/>
				<Typography>
					Login
				</Typography>
			</Toolbar>
		</AppBar>
	)
}