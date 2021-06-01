import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name = '';

  listValue:any = [];
  show: any;

  constructor(private todoService: TodoService, private router: Router) { }


  onClick() {
    this.todoService.addCategory(this.name);
    this.name = '';
  }

  ngOnInit(): void {
    this.listValue = this.todoService.categoryRender();
  }

  getCategoryValue(id: any) {
    this.todoService.taskShow = true;
    this.todoService.taskClass = true;
    this.todoService.setCategoryId(id);
    this.router.navigate(["todo/task"], {queryParams: {id: id}})
  }
}
