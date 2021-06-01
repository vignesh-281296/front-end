import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    categoryId: any;
    taskId: any;
    className: any;
    subTaskShow: any;

    constructor(public todoService: TodoService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.categoryId = this.todoService.taskShow;
        this.className = this.todoService.taskClass;
        this.subTaskShow = this.todoService.subTaskShow;
        console.log(this.className);
    }
    

}