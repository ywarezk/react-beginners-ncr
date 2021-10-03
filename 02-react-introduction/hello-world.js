
console.log(React);

// print hello world on the screen

/*

// the majority of the site we drew with HTML
HTML basically DOM tree initial recipe

const h1 = document.createElement('h1');
const div = document.getElementById('some-element');
div.appendChild(h1);

*/

/*
const helloWorldReactElement = React.createElement(
	'h1',
	null,
	React.createElement(
		'strong',
		null,
		React.createElement(
			'u',
			null,
			'hello world with React and underline'
		)
	)
);
*/

// JSX - Javascript as XML
/*
const helloWorldReactElement = (
	<h1>
		<strong>
			<u>
				hello world with babel
			</u>
		</strong>
	</h1>
)
*/

function HelloWorld() {
	return (
		<h1>
			<strong>
				<u>
					hello world with babel and a function using react create element when component is in tags
				</u>
			</strong>
		</h1>
	)
}

// how to take this and transform to DOM

// React platform agnostic
const divDOMElement = document.getElementById('react-container');

function App() {
	return (
		<div>
			<header>
				<HelloWorld />
			</header>
			<footer>
				<HelloWorld />
			</footer>
			
			<HelloWorld />
			<HelloWorld />
		</div>
	)
}

ReactDOM.render(
	<App />,
	divDOMElement
)

// react can draw the screen.

