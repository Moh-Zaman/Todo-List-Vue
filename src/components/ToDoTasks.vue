<template>
  <label class="checkbox-container-list">
    <input
      class="input-checkbox-field"
      type="checkbox"
      v-model="task.complete"
      data-action="complete"
    />
    <span class="checkmark"> </span>
  </label>
  <span :class="{ 'completed-task': task.complete }">
    {{ task.name }}
  </span>
  <span class="crossBtnIcon">
    <img :src="crossBtn" data-action="delete" />
  </span>
</template>

<script>
import cross from "../assets/images/icon-cross.svg";

export default {
  name: "ToDoTasks",
  props: {
    task: Object,
  },
  data() {
    return {
      crossBtn: cross,
    };
  },
};
</script>

<style></style>
