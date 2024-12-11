export class TodoListClass {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  addTaskHandler(newTask) {
    this.tasks.push({
      id: this.randomNumberGen(),
      name: newTask,
      complete: false,
    });
  }

  parentDeleteTasks() {
    this.tasks = this.tasks.filter((task) => !task.complete);
  }

  parentToggleCompleted(id) {
    const i = this.tasks.findIndex((task) => task.id === id);
    if (i !== -1) {
      this.tasks[i].complete = !this.tasks[i].complete;
    }
  }

  parentDeleteOneTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleAllTasks(checked) {
    this.tasks.forEach((task) => (task.complete = checked));
  }

  randomNumberGen() {
    return Date.now() + Math.floor(Math.random());
  }
}
