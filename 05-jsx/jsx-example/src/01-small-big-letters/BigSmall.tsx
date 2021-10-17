import { FC } from "react"


export const H1: FC = ({ children }) =>{
	return (
		<h1>
			{children}
		</h1>
	)
}

export function HelloWorld() {
	return (
		<h1>
			hello world
		</h1>
	)
}

export function HelloWorld2() {
	return (
		<H1>
			hello world
		</H1>
	)
}