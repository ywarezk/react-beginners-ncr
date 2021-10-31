import { FC } from "react";


export const HelloWorld: FC<{ name?: string }> = ({
	name = 'Guest'
}) => {
	return (
		<h1 data-testid="hello">
			Hello {name}
		</h1>
	)
}