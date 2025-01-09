<template>
  <section>
    <section class="task-header-wrapper">
      <ToDoHeader />
    </section>
    <section>
      <ToDoInput :taskList="taskList" />
      <ToDoList :taskList="taskList" />
    </section>
  </section>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoList from "./components/ToDoList.vue";
import { TodoListClass } from "./classes/TodoListClass";

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
      taskList: new TodoListClass(),
    };
  },
  methods: {},
  mounted() {
    console.log(this.taskList);
  },
  updated() {
    console.log("Updated");
  },
};
</script>

<style>
.task-header-wrapper {
  display: flex;
  justify-content: center;
}
</style>
