<template>
  <label class="checkbox-container-list">
    <input
      class="input-checkbox-field"
      type="checkbox"
      v-model="task.complete"
      @click="taskList.parentToggleCompleted(task.id)"
    />
    <span class="checkmark"> </span>
  </label>
  <span :class="{ 'completed-task': task.complete }">
    {{ task.name }}
  </span>
  <span class="crossBtnIcon" @click="taskList.parentDeleteOneTask(task.id)">
    <img :src="crossBtn" />
  </span>
</template>

<script>
import crossBtn from "../assets/images/icon-cross.svg";

export default {
  name: "ToDoTasks",
  props: {
    taskList: Object,
    task: Object,
  },
  data() {
    return {
      crossBtn: crossBtn
    }
  },
};
</script>

<style></style>
