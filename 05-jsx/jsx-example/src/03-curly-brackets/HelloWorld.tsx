

// const hello = {}
// expression = what the datatype that the prop expects
// React.createElement()
import { ReactNode } from 'react';

export function HelloWorld() {
	const calculateStyles = () => {
		return {
			backgroundColor: 'red'
		}
	}
	
	const calculateSpan = () => {
		return <span>hello in span</span>
	}
	
	return (
		<>
			<h1
				className={Math.random() > 0.5 ? 'larger than 0.5' : 'smaller than 0.5'}
				style={calculateStyles()}
			>
				hello world {Math.random()}
				{calculateSpan()}
				{'expression of string'}
				{<span>some other jsx</span>}
				
				{ JSON.stringify({hello: 'world'}) }
				
				{'hello'}
				{30}
				{<span> hello world</span>}
				{ <>world</> }
				
				{
					[
						'hello',
						30,
						<span> hello world</span>,
						<>hello</>
					]
				}
				
				{
					false
				}
				
				{
					true
				}
				
				{
					null
				}
				
				{
					undefined
				}
				
			</h1>
			<p>
				hello world
			</p>
		</>
	)
}

/**

if the dynamic expression that you place in {}
is between tags <h1>{}</h1>

expression should return the following value:
string
number
ReactElement
array of ReactNode
false,
true,
null,
undefined

 */