import { Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense';
import { ExpenseListComponent } from './components/expense-list/expense-list';

export const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: AddExpenseComponent },
  { path: 'list', component: ExpenseListComponent },
];
