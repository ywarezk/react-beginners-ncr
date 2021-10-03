/**
 * Create a function that takes an object
 * and print the key and value of that object
 */
 
export function printObj(obj: {[key: string]: string}) {
	for(let key of Object.keys(obj)) {
		console.log(`The key is: ${key} and the value is: ${obj[key]}`);
	}	
}