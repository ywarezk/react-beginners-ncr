/**
 * function that will get a url and send a request to the url and 
 * return a promise containing a response
 */

import axios from 'axios';

async function request(url: string) {
	const res = await axios.get(url);
	return res.data;
}

request('https://nztodo.herokuapp.com/api/tasks/?format=json');