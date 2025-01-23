import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';



import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-loan-details',
  standalone: true,
  imports: [ MatCardModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule ],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.scss'
})
export class LoanDetailsComponent {

	displayedColumns: string[] = ['amount', 'interestRate', 'term'];


  loans = [
    { amount: 10000, interestRate: 5, term: 12 },
    { amount: 20000, interestRate: 4.5, term: 24 },
    { amount: 15000, interestRate: 6, term: 36 }
  ];

}
