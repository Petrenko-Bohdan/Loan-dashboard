export interface Loan {
  id: number;
  amount: number;
  term: number;
  rateType: string;
  interestRate: number;
  postOverpayment: string;
  totalPayments: number;
  totalOverpayment: number;
  totalCost: number;
  repaymentTime: number;
  profit: number;
}
