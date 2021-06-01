import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { TodoRouting } from './todo-routing.module';
import { TaskComponent } from './task/task.component';
import { TodoComponent } from './todo.component';
import { SubTaskComponent } from './sub-task/sub-task.component';



@NgModule({
  declarations: [
    CategoryComponent,
    HeaderComponent,
    TaskComponent,
    TodoComponent,
    SubTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRouting
    
  ]
})
export class TodoModule { }
