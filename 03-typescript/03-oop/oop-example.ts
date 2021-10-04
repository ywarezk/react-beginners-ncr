/**
 * how to define class in typescript/javascript
 */
 
class Person {
	public age: number;
	
	constructor(private name: string, age: number) {
		this.age = age;
	}	
}

const me: Person = new Person('Yariv Katz', 36); 
console.log(me.age);
// console.log(me.name);

class Student extends Person {
	constructor(name: string, age: number, public grade: number = 100) {
		super(name, age);
	}
}

// static
// abstract class
// public/private/protected
// 