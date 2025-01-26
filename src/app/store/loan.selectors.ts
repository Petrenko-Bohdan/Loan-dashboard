import { createSelector, createFeatureSelector } from "@ngrx/store";
import { LoanState } from "./loan.reducer";

export const selectLoanState = createFeatureSelector<LoanState>('loan');

export const selectAllLoans = createSelector( selectLoanState,(state: LoanState)=>state.loans);

export const selectLoanById = (loanId: string)=>createSelector(selectLoanState, (state: LoanState)=>state.loans.find(loan => loan.id === loanId))