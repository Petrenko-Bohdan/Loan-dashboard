import { createReducer, on } from '@ngrx/store';
import { calculateLoan, calculateLoanSuccess } from './loan.actions';
import { Loan } from '../models/loan.model';

export interface LoanState {
  loan: Loan | null;
  paymentSchedule: any[];
}

export const initialState: LoanState = {
  loan: null,
  paymentSchedule: [],
};

export const loanReducer = createReducer(
  initialState,
  on(calculateLoan, (state, { loan }) => ({
    ...state,
    loan,
    paymentSchedule: calculatePaymentSchedule(loan),
  })),
  on(calculateLoanSuccess, (state, { paymentSchedule }) => ({
    ...state,
    paymentSchedule,
  }))
);

function calculatePaymentSchedule(loan: Loan): any[] {
	const { amount, interestRate, term } = loan;
	const monthlyInterestRate = interestRate / 12 / 100;
	const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -term));

	const schedule = [];
	let remainingBalance = amount;

	for (let i=1; i<=term; i++){
		const interest = remainingBalance * monthlyInterestRate;
		const principal = monthlyPayment - interest;
		remainingBalance -= principal;

		schedule.push({
			month: i,
			monthlyPayment: monthlyPayment.toFixed(2),
			principal: principal.toFixed(2),
			interest: interest.toFixed(2),
			remainingBalance: remainingBalance.toFixed(2),
		})
	}

	return schedule;
}
