import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoanService } from '../services/loan.service';
import { addLoan, } from './loan.actions'; //addLoanSuccess, addLoanFailure 
import { Loan } from '../models/loan.model';

@Injectable()
export class LoanEffects{
	constructor(
		private actions$: Actions,
		private loanService: LoanService,
		private store: Store
	){}

	addLoan$ = createEffect(()=>this.actions$.pipe(
		ofType(addLoan),
		mergeMap(action => this.loanService.addLoan(action.loan).pipe(
			map((loan: Loan)=>addLoanSuccess({loan})),
			catchError(error=>of(addLoanFailure({error})))
		))
	))
}