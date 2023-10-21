"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
class ToDoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.Id !== id);
    }
    markTaskAsCompleted(id) {
        const task = this.tasks.find(task => task.Id === id);
        if (task) {
            task.Completed = true;
        }
    }
    printTasks() {
        console.log('To-Do List:');
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.Id}, Title: ${task.Title}, Completed: ${task.Completed ? 'Yes' : 'No'}, Deadline: ${task.DeadLineInHours} hours`);
        });
    }
}
exports.ToDoList = ToDoList;
