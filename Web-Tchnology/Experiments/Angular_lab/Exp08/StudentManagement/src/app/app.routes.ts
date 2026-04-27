import { Routes } from '@angular/router';
import { ConceptRoute } from '../concept-route/concept-route';
import { AddStudent } from '../add-student/add-student';
import { ListStudent } from '../list-student/list-student';
import { Home } from '../home/home';

export const routes: Routes = [
    {path:'CR', component: ConceptRoute},
    {path: 'addStudent', component:AddStudent},
    {path: 'listStudent', component:ListStudent},
    {path: 'home', component:Home}
];
