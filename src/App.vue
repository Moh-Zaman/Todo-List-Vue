<template>
  <section>
    <section class="task-header-wrapper">
      <ToDoHeader />
    </section>
    <section>
      <ToDoInput
        @add-task="addTaskHandler"
        @toggle-all="toggleAllTasks"
        :is-checked="isChecked"
      />
      <ToDoList
        :tasks="tasks"
        @toggle-completed="parentToggleCompleted"
        @delete-task="parentDeleteOneTask"
        @clear-completed="parentDeleteTasks"
      />
    </section>
  </section>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  components: {
    ToDoHeader,
    ToDoInput,
    ToDoList,
  },
  data() {
    return {
      newTask: "",
      isChecked: false,
      tasks: [
        {
          id: this.randomNumberGen() + 1,
          name: "Placeholder 1",
          complete: false,
        },
        {
          id: this.randomNumberGen() + 2,
          name: "Placeholder 2",
          complete: true,
        },
        {
          id: this.randomNumberGen() + 3,
          name: "Placeholder 3",
          complete: true,
        },
      ],
    };
  },
  methods: {
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
      this.isChecked = false;
    },
    parentDeleteTasks() {
      this.tasks = this.tasks.filter((task) => !task.complete);
    },
    parentToggleCompleted(id) {
      const i = this.tasks.findIndex((task) => task.id === id);
      if (i !== -1) {
        this.tasks[i].complete = !this.tasks[i].complete;
        this.isChecked = this.tasks.every((task) => task.complete);
      }
    },
    parentDeleteOneTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleAllTasks(isChecked) {
      this.isChecked = isChecked;
      this.tasks.forEach((task) => (task.complete = this.isChecked));
    },
    randomNumberGen() {
      return Date.now() + Math.floor(Math.random());
    },
  },
};
</script>

<style>
.task-header-wrapper {
  display: flex;
  justify-content: center;
}
</style>
