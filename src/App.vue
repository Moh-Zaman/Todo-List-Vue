<template>
<div>
  <div class="task-list-wrapper">
    <ToDoHeader />
  </div>    
</div>
</template>

<script>
import ToDoHeader from './components/ToDoHeader.vue';

  export default {
    name: "App",
    components: {
      ToDoHeader,
    },
  }
</script>

<style>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}
</style>