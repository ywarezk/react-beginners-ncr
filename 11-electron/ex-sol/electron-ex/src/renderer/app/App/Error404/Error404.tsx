/**
 * This will be displayed when the user types a bad url
 */
 
import { FC } from 'react';
 
export const Error404: FC = () => {
	return (
		<div>
			<h1>
				Error 404
			</h1>
			<h4>Invalid URL</h4>
		</div>
	)
}