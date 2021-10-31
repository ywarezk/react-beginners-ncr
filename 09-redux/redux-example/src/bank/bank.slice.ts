/**
 * a slice is a part of our redux state
 
 {
	 bank: {...}
 }
 
 a slice contains the reducer and actions that are needed to manage that part of the state
 
 */
 
import { CaseReducer, createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { AnyAction, Action } from 'redux';

export interface BankState {
	amount: number
}

export interface AmountAction extends Action {
	payload: number
}

// export const bankSlice = createSlice<BankState, SliceCaseReducers<BankState>>({
export const bankSlice = createSlice<BankState, any, any>({
	name: 'bank',
	initialState: {
		amount: 100
	},
	reducers: {
		// action + reducer to handle the change of that action
		// {type: '', payload: 10}
		increment(state: BankState, action: AmountAction) {
			state.amount = state.amount + action.payload;
		}
	}
})