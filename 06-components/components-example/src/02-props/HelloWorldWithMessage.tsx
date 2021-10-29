import { FC } from "react";

interface HelloWorldWithMessageProps {
	name: string; 
	age?: number;
	
}

/*
const hello: Function = () => {
	
}
*/

// props => {name: 'Yigal', age: 45}
export const HelloWorldWithMessage: FC<HelloWorldWithMessageProps> = ({
	name, 
	age = 36, // undefined
	...hadasProps
}) => {
	
	return (
		<>
			<h1>
				Hello world {name}
			</h1>
			<p>
				Yigal age is {age}
			</p>
		</>
	)
}