/**
 * this component should be displayed only in the url: /
 
 
 /
 
 /settings
 
 /settings/user
 
 */
 
import { FC } from 'react';
import { Route } from 'react-router';
 
export const SettingsPage: FC = () => {
	return (
		<div>
			
			<h1>
				this text is in all the routes that start with /settings
			</h1>
			
			<Route path="/settings/user">
				<nav>
					<h1>
						this is displayed only in the user settings pages
					</h1>
				</nav>
			</Route>
			
			
		</div>
	)
}