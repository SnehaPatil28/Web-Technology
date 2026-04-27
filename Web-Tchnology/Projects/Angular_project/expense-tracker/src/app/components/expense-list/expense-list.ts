import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  templateUrl: './expense-list.html',
})
export class ExpenseListComponent {
  @Input() expenses: any[] = [];
}
