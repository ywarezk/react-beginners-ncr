/**
 * Using axios send a request to the following url:
 * http://nztodo.herokuapp.com/api/tasks/?format=json
 * print the json returned from the server
 */

import axios from 'axios'

axios
	.get('https://nztodo.herokuapp.com/api/tasks/?format=json')
	.then(res => res.data)
	.then(data => console.log(data))
	.catch((err) => {
		console.log(err);	
	});