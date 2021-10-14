/**
 * Destructuring - Javascript/Typescript
 * quickly extract values from array or an object
 */
 
const myDogsAge: number[] = [9,4];

// pigletshvilyAge = 9, sweetnessAge=4
const [pigletshvilyAge, sweetnessAge] = myDogsAge

/*
const pigletshvilyAge = myDogsAge[0];
const sweetnessAge = myDogsAge[1];
*/

const dogsAge = {
	'pigletshvily': 9,
	'sweetness': 3
}

const { pigletshvily, sweetness  } = dogsAge;

/**

const pigletshvily = dogsAge['pigletshvily']

 */
 
function MyComponent({ 
	pigletshvily = 9, 
	sweetness 
}: {[key: string]: number}) {
	console.log(dogsAge);
}

MyComponent(dogsAge);
MyComponent({
	'hello': 10
})

function getSomeNumber(num: number) {
	num = 9;
	console.log(num);
}

const myAge1: number = 36;

getSomeNumber(myAge1);