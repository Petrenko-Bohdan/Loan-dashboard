import{createAction} from '@ngrx/store';
import { props } from '@ngrx/store';
import { Loan } from '../models/loan.model';

export const addLoan = createAction(
	'[Loan] Add Loan',
	props<{loan: Loan}>()
)