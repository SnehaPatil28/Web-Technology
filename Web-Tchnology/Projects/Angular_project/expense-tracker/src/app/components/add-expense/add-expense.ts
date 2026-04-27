import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  standalone: true, 
  templateUrl: './add-expense.html',
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter<any>();

  addExpense(titleInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const expense = {
      title: titleInput.value,
      amount: +amountInput.value,
    };

    this.expenseAdded.emit(expense);

    titleInput.value = '';
    amountInput.value = '';
  }
}
