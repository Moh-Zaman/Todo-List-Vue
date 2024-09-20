<template>
<section>
  <section class="task-list-wrapper">
    <ToDoHeader />
  </section>
  <section class="task-input-wrapper">
    <ToDoInput />
  </section>
</section>
</template>

<script>
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoInput from './components/ToDoInput.vue';

  export default {
    name: "App",
    components: {
      ToDoHeader,
      ToDoInput,
    },
  }
</script>

<style>
.task-list-wrapper {
  display: flex;
  justify-content: center;
}

.task-input-wrapper {
  display: flex;
  border-radius: 5px;
  background: hsl(235, 24%, 19%);
  padding: 20px;
  width: 500px;
  margin: auto;
}
</style>