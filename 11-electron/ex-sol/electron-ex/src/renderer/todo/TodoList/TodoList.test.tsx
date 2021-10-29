/**
 * mock server response and make sure the right amount of items are
 * created
 */

import { TodoList } from './TodoList';
import { render, waitFor } from '@testing-library/react';
import { taskService } from '../task.service';

const mockTodoList = [
	{ "id": 10104, "title": "title:0.7193547719438698", "description": "description:0.7402325067755231", "group": "group:test", "when": "2020-12-02T20:47:58.628000Z" },
	{ "id": 10108, "title": "title:0.824672929631804", "description": "description:0.00103177017009215", "group": "group:test", "when": "2020-12-02T20:55:26.559000Z" },
	{ "id": 10112, "title": "title:0.4579411370433868", "description": "description:0.6001902184924468", "group": "group:test", "when": "2020-12-02T20:57:09.100000Z" },
]

describe('<TodoList />', () => {
	it('check elements created according to server response', async () => {
		taskService.getTasks = jest.fn().mockResolvedValueOnce(mockTodoList);
		const { container } = render(
			<TodoList />
		);
		await waitFor(
			() => expect(container.getElementsByTagName('li').length > 0).toBe(true)
		);
		expect(container.getElementsByTagName('li').length).toBe(3);
	})
});
