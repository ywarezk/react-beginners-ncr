
interface HasLength {
	length: number;
}

interface SayHello<T> {
	sayHello: (msg: string) => T
}

// string, array
function returnLength<T extends HasLength>(someVar: T) {
	return someVar.length
}

// returnLength(30);

class Person1 implements SayHello<string> {
	sayHello(msg: string) {
		return msg
	}
	
	myAge() {
		
	}
}