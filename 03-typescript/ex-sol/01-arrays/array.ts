/**
 * Create an array of strings.
 * map that array of strings to array of numbers, based on the length of each string
 * Iterate on the array of objects and print it
 */

// create array of strings
const names: string[] = ['Yariv', 'Katz', 'Piglet', 'Chaitovski', 'Sweetness', 'fluffy belly'];

// map the array of string to array of the length of the strings
const namesLength: number[] = names.map((name) => {
	return name.length;
})

// print that array
for (let len of namesLength) {
	console.log(len);
}