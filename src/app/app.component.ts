import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoanDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'loan-dashboard';
}
