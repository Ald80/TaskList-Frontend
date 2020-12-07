export class TaskList {

    task:any = [];

    addList(title):void {
        const arr = {title: title, status: false};
        console.log("task " + arr);
        this.task.push(arr);
        console.log("task " + this.task[0]);
    }

    getTask():void {
        this.task;
    }

    remove(index: number):void {
        this.task.splice(index);
    }

    editTask(title, index):void {
        this.task[index];
    }
}