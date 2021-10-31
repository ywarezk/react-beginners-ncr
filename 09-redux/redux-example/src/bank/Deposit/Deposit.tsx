
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { bankSlice } from '../bank.slice';


// store.dispatch(action);
// store.dispatch({type: 'identifier of the action', payload: <additional data>});

export const Deposit: FC = () => {
	// dispatch = store.dispatch
	const dispatch = useDispatch()
	
	const handleDeposit = () => {
		dispatch((bankSlice.actions as any).increment(50));
	}
	
	return (
		<button onClick={ handleDeposit }>
			Deposit 10$
		</button>
	)
}