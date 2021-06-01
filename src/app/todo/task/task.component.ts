import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  category: string = '';
  taskLists: any = [];
  categoryId: any;
  name = '';
  taskStyle = this.todoService.taskClass;


  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
    this.category =  this.todoService.getCategoryName(data.id);
    this.categoryId = data.id;
    this.taskLists = this.todoService.renderTask();
    });
  }

  onClick() {
    this.todoService.addTask(this.name);
    this.name = '';
  }

  getTaskValue(taskId: any) {
    this.todoService.taskClass = false;
    this.todoService.subTaskShow = true;
    //alert(taskId);
    this.router.navigate(["todo/sub-task"], {queryParams: {taskid: taskId}})
  }

  // checkboxChecked(id: any) {
  //   alert("yes fine");
  //   this.todoService.taskCompleted(id);
  // }

}
