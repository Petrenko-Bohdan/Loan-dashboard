import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoanState } from './loan.reducer';

export const selectLoanState = createFeatureSelector<LoanState>('loan');

export const selectPaymentSchedule = createSelector(
  selectLoanState,
  (state: LoanState) => state.paymentSchedule
);

export const selectLoanById = (loanId: string) =>
  createSelector(selectLoanState, (state: LoanState) =>
    state.loan
  );
