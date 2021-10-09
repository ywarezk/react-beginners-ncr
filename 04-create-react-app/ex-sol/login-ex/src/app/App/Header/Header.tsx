/**
 * This is the component used for the layout header
 */
 
import { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import pigletSweetness from './piglet-sweetness.jpeg';
import styles from './Header.module.scss';
 
export const Header: FC = () => {
	return (
		<AppBar>
			<ToolBar className={styles.toolbar}>
				<img 
					alt="logo"
					src={pigletSweetness} 
					className={styles.headerImg}
				/>
				<Typography>
					Login
				</Typography>
			</ToolBar>
		</AppBar>
	)
}