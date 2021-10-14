/**
 * Creating a hard coded todo list
 */
 
import { FC } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
 
export const TodoList: FC = () => {
	const todoList = [
		{ id: 1, title: 'Pigletshvily', description: 'Walk with Pigletshvily' },
		{ id: 2, title: 'Sweetness', description: 'Walk with Sweetness' },
		{ id: 3, title: 'Groceries', description: 'Go to the supermarket' },
	]
	
	return (
		<List>
			{
				todoList.map(item => (
					<ListItem>
						<ListItemText>
							<Typography variant="h2">
								{ item.title }
							</Typography>
							<Typography variant="body1">
								{ item.description }
							</Typography>
						</ListItemText>
					</ListItem>
				))
			}
		</List>
	)	
}