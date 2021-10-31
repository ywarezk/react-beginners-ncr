/**
 * I want to create a redux store
 */
 
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: (state) => state
})