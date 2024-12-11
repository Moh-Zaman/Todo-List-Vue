export class TodoListClass {
    constructor(tasks = []) {
        this.tasks = tasks
    }

    addTaskHandler(newTask) {
        const trimmedName = newTask.trim();
        if (trimmedName) {
          this.tasks.push({
            id: this.randomNumberGen(),
            name: trimmedName,
            complete: false,
          });
        }
        newTask = "";
        isChecked = false;
      }

      parentDeleteTasks() {
        this.tasks = this.tasks.filter((task) => !task.complete);
      }

      parentToggleCompleted(id) {
        const i = this.tasks.findIndex((task) => task.id === id);
        if (i !== -1) {
          this.tasks[i].complete = !this.tasks[i].complete;
          this.isChecked = this.tasks.every((task) => task.complete);
        }
      }

      parentDeleteOneTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }

      toggleAllTasks(isChecked) {
        this.isChecked = isChecked;
        this.tasks.forEach((task) => (task.complete = this.isChecked));
      }

      randomNumberGen() {
        return Date.now() + Math.floor(Math.random());
      }
}