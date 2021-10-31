import './App.css';
import { DisplayAmount } from './bank/DisplayAmount/DisplayAmount';
import { Deposit } from './bank/Deposit/Deposit';

function App() {
  return (
    <div className="App">
      <DisplayAmount />
	  
	  <Deposit />
    </div>
  );
}

export default App;
