import './App.css';
import { DisplayAmount } from './bank/DisplayAmount/DisplayAmount';
import { Deposit } from './bank/Deposit/Deposit';
import { Provider } from 'react-redux';
import { store } from './common/store';

function App() {
  return (
	<Provider store={store}>
		<div className="App">
			<DisplayAmount />

			<Deposit />
		</div>
	</Provider>    
  );
}

export default App;
