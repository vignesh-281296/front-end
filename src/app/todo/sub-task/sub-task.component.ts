import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent implements OnInit {
  taskName:any = '';
  taskId:any = '';
  name:any = '';
  subTasks:any = [];

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(data => {
     // alert(this.todoService.taskClass);
     this.taskId = data.taskid;
     this.taskName = this.todoService.subTask(data.taskid);
      console.log(this.todoService.subTask(data.taskid));
      this.subTasks = this.todoService.renderSubTask(data.taskid);
      });
    
  }

  onClick() {
    this.todoService.addSubTask(this.name,this.taskId);
    this.name = '';

  }

}
