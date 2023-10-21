import { ToDo } from './ToDo';
import { ToDoList } from './ToDoList';

const toDoList = new ToDoList();

const task1: ToDo = {
    Id: 1,
    Title: 'gam3a',
    Completed: false,
    DeadLineInHours: 2
};

const task2: ToDo = {
    Id: 2,
    Title: 'beet',
    Completed: false,
    DeadLineInHours: 3
};

const task3: ToDo = {
    Id: 3,
    Title: 'GP',
    Completed: false,
    DeadLineInHours: 4
};

const task4: ToDo = {
    Id: 4,
    Title: 'gaming',
    Completed: false,
    DeadLineInHours: 5
};

const task5: ToDo = {
    Id: 5,
    Title: 'NOOM',
    Completed: false,
    DeadLineInHours: 6
};

toDoList.addTask(task1);
toDoList.addTask(task2);
toDoList.addTask(task3);
toDoList.addTask(task4);
toDoList.addTask(task5);

toDoList.markTaskAsCompleted(2);
toDoList.deleteTask(4);

toDoList.printTasks();