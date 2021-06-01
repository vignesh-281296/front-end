import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CategoryComponent } from './todo/category/category.component';
import { TodoModule } from './todo/todo.module';

const routes: Routes = [
  { path: '', component:  AuthComponent},
  //{path: 'todo' , loadChildren: () => TodoModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }