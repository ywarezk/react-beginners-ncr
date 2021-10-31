/**
 * I want to create a redux store
 */
 
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { bankSlice, BankState } from '../bank/bank.slice';

export interface State {
	bank: BankState
}

export const store = configureStore<State>({
	reducer: {
		bank: bankSlice.reducer 
	}
})