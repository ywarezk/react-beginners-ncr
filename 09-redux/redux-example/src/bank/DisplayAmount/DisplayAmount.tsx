import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../common/store';

export const DisplayAmount: FC = () => {
	// to read something from redux
	// when amount change the component will re-render
	const amount = useSelector((state: State) => {
		return state.bank.amount;
	})
	
	return (
		<h1>
			the amount is: { amount }
		</h1>
	)	
}