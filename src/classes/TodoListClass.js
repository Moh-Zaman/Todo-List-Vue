export class TodoListClass {
  constructor() {
    this.tasks = new Map();
    this.allTasksChecked = false;
  }

  addTaskHandler(newTask) {
    const guid = this.randomNumberGen()
    this.tasks.set(guid, {id: guid, name: newTask, complete: false})
  }

  parentDeleteTasks() {
    this.tasks.forEach((task) => {
      if(task.complete === true) {
        this.tasks.delete(task.id)
      }
    })
  }

  parentToggleCompleted(id) {
    const task = this.tasks.get(id)
    if(task) {
      task.complete = !task.complete
    }
  }

  parentDeleteOneTask(id) {
    this.tasks.delete(id)
  }

  toggleAllTasks(checked) {
    this.tasks.forEach((task) => (task.complete = !checked));
    this.allTasksChecked = !checked
  }

  randomNumberGen() {
    return Date.now() + Math.floor(Math.random());
  }
}
