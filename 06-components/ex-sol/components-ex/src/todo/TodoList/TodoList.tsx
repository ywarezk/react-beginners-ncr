/**
 * Creating a hard coded todo list
 */
 
import { FC, useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Task } from '../task.model';
import { taskService } from '../task.service';
 
export const TodoList: FC = () => {
	const [todoList, setTodoList] = useState<Task[]>([]);
	
	useEffect(() => {
		taskService.getTasks()
			.then((tasks) => setTodoList(tasks));
	}, [])
	
	return (
		<List>
			{
				todoList.map(item => (
					<ListItem key={item.id}>
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