import { createReducer, on } from '@ngrx/store';
import { addLoan } from './loan.actions';
import { Loan } from '../models/loan.model';

export interface LoanState {
	loans: Loan[];
}

export const initialState: LoanState = {
	loans: []
};

export const loanReducer = createReducer(initialState, on(addLoan, (state, {loan})=>({...state, loans: [...state.loans, loan]})))