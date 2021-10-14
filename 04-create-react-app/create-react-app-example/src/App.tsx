import React from 'react';
import './App.css';
import { Header } from './Header';
import { Login } from './Login';

function App() {
	return (
		<div className="App">
			<Header />
			<h1>
				Hello React
			</h1>
			
			<h2>
				Material example
			</h2>
			
			<Login />
		</div>
	);
}

export default App;
