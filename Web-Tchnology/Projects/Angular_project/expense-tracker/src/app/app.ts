import { Component } from '@angular/core';
import { AddExpenseComponent } from './components/add-expense/add-expense';
import { ExpenseListComponent } from './components/expense-list/expense-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddExpenseComponent, ExpenseListComponent], 
  templateUrl: './app.html',
})
export class AppComponent {
  expenses: any[] = [];

  onExpenseAdded(expense: any) {
    this.expenses.push(expense);
  }

  getTotal() {
    return this.expenses.reduce((sum, e) => sum + e.amount, 0);
  }
}
