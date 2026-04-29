import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './expense-list.html',
})
export class ExpenseListComponent {
  constructor(public expenseService: ExpenseService) {}
}
