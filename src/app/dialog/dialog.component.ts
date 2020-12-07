import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TaskList } from '../tasklist';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() value: string;
  @Input() showPrompt: boolean;
  @Input() placeholder: string;
  @Input() title: string;
  @Input() template: string;
  @Input() okText: string = 'OK';
  @Input() cancelText: string = 'Cancel';
  @Input() valueEmitted = new EventEmitter<string>();
  
  taskList = new TaskList();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogComponent) {

    // this.okText = 'OK';
    // this.cancelText = 'Cancel';
  }

  ngOnInit():void {
  }

  addTask(title):void {
    console.log(title);
    this.taskList.addList(title); 
    
  }

  onNoClick():void {
    this.dialogRef.close();
  }

  emitValue(value){
    this.valueEmitted.emit(value);
  }
}
