import { ToDo } from './ToDo';

export class ToDoList {
    private tasks: ToDo[] = [];

    addTask(task: ToDo) {
        this.tasks.push(task);
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.Id !== id);
    }

    markTaskAsCompleted(id: number) {
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