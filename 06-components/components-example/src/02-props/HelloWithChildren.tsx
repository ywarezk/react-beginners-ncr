import { FC } from "react";

// props => { children: [<span>...</span>, 45]}
export const HelloWithChildren: FC = ({children}) => {
	return (
		<h1>
			hello world {children}
		</h1>
	)
}