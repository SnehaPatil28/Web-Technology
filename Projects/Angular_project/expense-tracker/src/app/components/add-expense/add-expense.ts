import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  templateUrl: './add-expense.html',
})
export class AddExpenseComponent {
  constructor(private expenseService: ExpenseService) {}

  addExpense(titleInput: HTMLInputElement, amountInput: HTMLInputElement) {
    if (!titleInput.value || !amountInput.value) return;

    this.expenseService.addExpense({
      title: titleInput.value,
      amount: +amountInput.value,
    });

    titleInput.value = '';
    amountInput.value = '';
  }
}
