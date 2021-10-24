/**
 * Service to interact with the task api
 */
 
import axios from 'axios';
import { Task } from './task.model';
 
class TaskService {
	/**
	 * Send a request to a server to grab the tasks
	 * @returns 
	 */
	async getTasks(): Promise<Task[]> {
		const response = await axios.get<Task[]>('http://nztodo.herokuapp.com/api/tasks/?format=json');
		return response.data;
	}
	/*
	getTasks(): Promise<Task[]> {
		return axios
			.get<Task[]>('http://nztodo.herokuapp.com/api/tasks/?format=json')
			.then(response => response.data)
	}
	*/
	
	/**
	
	taskService
		.getTasks()
		.then((tasks) => {
			
		})
	
	 */
}

export const taskService = new TaskService();