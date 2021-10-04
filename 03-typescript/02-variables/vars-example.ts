/**
 * how to define variables in typescript
 */
 
var hello: string = 'world';
let myAge: number = 36;

// one assignment
// does not mean immutable
const doIHaveDogs: boolean = true;

// what is the difference and when to use what?

const myArray: Array<string | number> = [];
myArray.push(10);
// myArray.push(true);
// myArray = [];

// variable scope
var messageWithVar = 'blah';

if (doIHaveDogs) {
	var messageWithVar = 'hello';
	const message2 = 'world';
	let message3 = 'foo bar';
}

const message2 = 'stam string'

console.log(messageWithVar);


/**
			number of assignments   |     scope

var 				infinite        |    functional

let                 infinite        |      {}

const                  1            |      {}



 */
 
 
 function sayHello(msg: string): number {
	 return msg.length;
 }