import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: 'todo/category', component:  TodoComponent},
  { path: 'todo/task', component:  TodoComponent},
  { path: 'todo/sub-task', component:  TodoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRouting { }