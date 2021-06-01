import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService {
    categoryName: string = ''; 
    categoryId: any = '';
    taskShow: boolean = false;
    taskClass: boolean = true;
    subTaskShow: boolean = false;

    list: any = [
        {
            id: 1,
            icon: "fa fa-sun",
            name: 'My Day',
            taskList: []
        },
        {
            id: 2,
            icon: "fa fa-star",
            name: 'Important',
            taskList: []
        },
        {
            id: 3,
            icon: "fa fa-calendar",
            name: 'Planned',
            taskList: []
        },
        {
            id: 4,
            icon: "fa fa-user",
            name: 'Assigned to you',
            taskList: []
        },
        {
            id: 5,
            icon: "fa fa-home",
            name: 'Task',
            taskList: []
        }
    ]
    //subTaskValues:any = [];

    //subTaskList: any = [];

   /**
    * This method is used to add category
    * @param category category name
    */
    addCategory(category: string) {
        if (category === '') {
            category = 'untitled';

        }
        const obj = {
            id: this.list.length + 1,
            icon: 'fa fa-list',
            name: category,
            taskList: []
        }
        this.list.push(obj);
    }

    /**
     * This method is used to render the category 
     * @return category value
     */
    categoryRender() {
        return this.list;
    }


    /**
     * This method is used to get the category name
     * @param categoryId 
     * @returns 
     */
    getCategoryName(categoryId) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == categoryId) {
               this.categoryName = this.list[i].name;
            }
        }
        return this.categoryName;
    }

    setCategoryId(categoryId) {
        this.categoryId = categoryId;
    }

    /**
     * This method is used to add task
     * @param taskName 
     */
    addTask(taskName: string) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.categoryId == this.list[i].id) {
                const taskObj = {
                    id: this.categoryId,
                    taskId: 'task-' + (this.list[i].taskList.length + 1),
                    name: taskName,
                    value: false,
                    subTaskList: []
                }
                this.list[i].taskList.push(taskObj);
            }
        }
    }

    /**
     * This method is used to render the task
     * @returns tasks list
     */
    renderTask() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.categoryId == this.list[i].id) {
                return this.list[i].taskList;
            }
        }
    }

    /**
     * This method is used to get the task name
     * @param taskId 
     * @returns task name
     */
    subTask(taskId) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.categoryId == this.list[i].id) {
                for (let j = 0; j < this.list[i].taskList.length; j++) {
                    if (taskId == this.list[i].taskList[j].taskId) {
                        return this.list[i].taskList[j].name;
                        //this.subTaskValues.push(this.list[i].taskList[j].name);
                        //this.subTaskValues.push(this.list[i].taskList[j].value);
                    }
                }
            }
        }
        //console.log(this.subTaskValues[1]);
        // return this.subTaskValues;
    }

    /**
     * This method is used to add sub task
     * @param name sub task name
     * @param id task id
     */
    addSubTask(name: any, id: any) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.categoryId == this.list[i].id) {
                for (let j = 0; j < this.list[i].taskList.length; j++) {
                    if (id == this.list[i].taskList[j].taskId) {
                        const subTaskObj = {
                            id: 'sub-task-' + (this.list[i].taskList[j].subTaskList.length + 1),
                            taskid: id,
                            name: name
                        }
                        this.list[i].taskList[j].subTaskList.push(subTaskObj);
                        console.log(this.list[i].taskList[j].subTaskList[0]);
                    }
                }
            }
        }
    }

    /**
     * This method is used to render the sub task
     * @param taskId 
     * @returns subtask list
     */
    renderSubTask(taskId: any) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.categoryId == this.list[i].id) {
                for (let j = 0; j < this.list[i].taskList.length; j++) {
                    if (taskId == this.list[i].taskList[j].taskId) {
                        return this.list[i].taskList[j].subTaskList;
                    }
                }
            }
        }
    }

    // taskCompleted(taskId) {
    //     for (let i = 0; i < this.list.length; i++) {
    //         if (this.categoryId == this.list[i].id) {
    //             for (let j = 0; j < this.list[i].taskList.length; j++) {
    //                 if (taskId == this.list[i].taskList[j].taskId) {
    //                     this.list[i].taskList[j].value = true;
    //                     console.log(this.list[i].taskList[j]);
    //                 }
    //             }
    //         }
    //     }
    // }

}