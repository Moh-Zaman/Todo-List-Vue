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
export default {
  name: "ToDoTasks",
  props: {
    taskList: Object,
    crossBtn: String,
    task: Object,
  },
};
</script>

<style></style>
