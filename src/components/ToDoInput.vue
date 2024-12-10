<template>
  <section class="task-input-wrapper">
    <form class="input-form-wrapper" @submit.prevent>
      <label class="checkbox-container">
        <input
          class="input-checkbox-field"
          type="checkbox"
          v-model="isChecked"
          @change="toggleAllTasks"
        />
        <span class="checkmark"></span>
      </label>
      <input
        v-model="newTask"
        @keyup.enter="addTaskHandler"
        class="input-text-field"
        :placeholder="'Enter Tasks Here'"
        type="text"
      />
    </form>
  </section>
  <br />
  <ToDoList
    :tasks="tasks"
    @toggle-completed="parentToggleCompleted"
    @delete-task="parentDeleteOneTask"
    @clear-completed="parentDeleteTasks"
  />
</template>

<script>
import ToDoList from "./ToDoList.vue";

export default {
  name: "ToDoInput",
  components: {
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
    addTaskHandler() {
      const trimmedName = this.newTask.trim();
      if (trimmedName) {
        this.tasks.push({
          id: this.randomNumberGen(),
          name: trimmedName,
          complete: false,
        });
      }
      this.newTask = "";
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
    parentDeleteOneTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleAllTasks() {
      this.tasks.forEach((task) => (task.complete = this.isChecked));
    },
    randomNumberGen() {
      return Date.now() + Math.floor(Math.random());
    },
  },
};
</script>

<style>
.task-input-wrapper {
  display: flex;
  border-radius: 5px;
  background: hsl(235, 24%, 19%);
  padding: 20px;
  width: 500px;
  margin: auto;
}

.input-form-wrapper {
  display: flex;
  position: relative;
  font-size: 18px;
}

.input-text-field {
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  text-align: left;
  font-size: 18px;
  caret-color: hsl(220, 98%, 61%);
  vertical-align: middle;
  padding-left: 20px;
  width: 400px;
}

.input-checkbox-field {
  position: absolute;
  opacity: 0;
}

.checkbox-container {
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  cursor: pointer;
}

.checkmark {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid hsl(234, 11%, 52%);
  display: inline-block;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.input-checkbox-field:checked + .checkmark {
  background: linear-gradient(
    to right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
  border: none;
}

.input-checkbox-field:checked + .checkmark:after {
  content: "";
  position: absolute;
  left: 12px;
  top: 5px;
  width: 8px;
  height: 16px;
  border: solid rgb(255, 255, 255);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox-container:hover .checkmark {
  background-color: hsl(234, 11%, 85%);
}
</style>
