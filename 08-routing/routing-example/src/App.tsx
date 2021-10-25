import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { Error404Page } from './pages/Error404';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">home page</Link>
						</li>
						<li>
							{/* <a href="/about">about</a> */}
							<Link to="/about">about</Link>
						</li>
					</ul>
				</nav>
			
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/about">
						<AboutPage />
					</Route>
					<Route>
						<Error404Page />
					</Route>
				</Switch>	
				
				
{/* 				
				<Route path="/settings">
					<SettingsSidebar />
				</Route>			 */}
			</div>
		</BrowserRouter>
	);
}

export default App;
