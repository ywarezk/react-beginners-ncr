import './App.css';
import { HelloWorld } from './01-hello-world/HelloWorld';
import { HelloWorldWithMessage } from './02-props/HelloWorldWithMessage';
import { HelloWithChildren } from './02-props/HelloWithChildren';
import { OffOn } from './03-state-machine/OffOn';
import { Counter } from './04-lifecycle/Counter';

function App() {
	return (
		<div className="App">
			<h1>Hello world component</h1>

			<HelloWorld />

			<HelloWorld />
			
			<HelloWorld />
			
			<h1>
				Props
			</h1>
			
			<HelloWorldWithMessage name="Yigal" age={45} />
			
			<HelloWithChildren>
				<span>
					hello in span
				</span>
				{
					46
				}
			</HelloWithChildren>
			
			<h1>
				State Machine
			</h1>
			
			<OffOn />
			
			<h1>
				Lifecycle of a component
			</h1>
			
			<Counter />
		</div>
	);
}

export default App;
