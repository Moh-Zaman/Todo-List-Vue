<template>
  <section>
    <section class="task-header-wrapper">
      <ToDoHeader />
    </section>
    <section>
      <ToDoInput
        :taskList="taskList"
        :is-checked="isChecked"
      />
      <ToDoList
        :taskList="taskList"
      />
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
      isChecked: false,
      taskList: new TodoListClass([
        {
          id: 1,
          name: "Placeholder 1",
          complete: false,
        },
        {
          id: 2,
          name: "Placeholder 2",
          complete: true,
        },
        {
          id: 3,
          name: "Placeholder 3",
          complete: true,
        },
      ])
    };
  },
  methods: {

  },
  mounted() {
    console.log(this.taskList)
  },
  updated() {
    console.log("Updated")
  }
};
</script>

<style>
.task-header-wrapper {
  display: flex;
  justify-content: center;
}
</style>
