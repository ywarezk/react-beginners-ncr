import { sayHello } from './modules-example';
import Person from './modules-example';

// export const sayHello = 'hello world';
console.log('hello')

Person.prototype.sayHello = function() {
	console.log('this is a different message');
}

const message = 'hello';

export default message;