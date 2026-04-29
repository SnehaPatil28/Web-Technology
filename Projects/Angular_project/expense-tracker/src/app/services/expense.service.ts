import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: { title: string; amount: number }[] = [];

  getExpenses() {
    return this.expenses;
  }

  addExpense(expense: { title: string; amount: number }) {
    this.expenses.push(expense);
  }

  getTotal() {
    return this.expenses.reduce((sum, e) => sum + e.amount, 0);
  }
}
