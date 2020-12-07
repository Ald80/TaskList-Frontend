import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from './dialog/dialog.component';

import { TaskList } from './tasklist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasklist-frontend';

  // showDialog = false;
  // editingTodo: any = null;
  // fieldValue = '';
  // todoList: any = [];
  // okButtonText = 'Create Task';

  // taskList:any = [];
  
  taskList = new TaskList();
  task: any = [];

  constructor(public dialog: MatDialog) {}

  openDialog():void {
   
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.refreshTask();
    });
  }

  editTask(title):void {

  }

  refreshTask():void {
    console.log("this.taskList.task -> " + this.taskList.getTask());
    this.task = this.taskList.getTask();
  }

  // todoDialog(todo = null) {
  //   this.okButtonText = 'Create Task';
  //   this.fieldValue = '';
  //   this.editingTodo = todo;
  //   if (todo) {
  //     this.fieldValue = todo.title;
  //     this.okButtonText = 'Edit Task';
  //   }
  //   this.showDialog = true;
  // }

  // remove(index: number) {
  //   this.todoList.splice(index, 1);
  // }

  // editTodo(title) {
  //   this.editingTodo.title = title;
  // }

  // updateTodo(title) {
  //   if (title) {
  //     title = title.trim();

  //     if (this.editingTodo) {
  //       this.editTodo(title);
  //     } else {
  //       this.addTodo(title);
  //     }
  //   }
  //   this.hideDialog();
  // }

  // addTodo(title){
  //   const todo = {title: title, completed: false};
  //   this.todoList.push(todo);
  // }

  // hideDialog(){
  //   this.showDialog = false;
  //   this.editingTodo = null;
  //   this.fieldValue = null;
  // }
}
