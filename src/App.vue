<template>
<section>
  <section class="task-header-wrapper">
    <ToDoHeader /> 
  </section>
  <section>
    <ToDoInput />
    <!-- Split this up Todo Input and Todo List -->
  </section>
  <section class="task-list-wrapper">
    
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
.task-header-wrapper {
  display: flex;
  justify-content: center;
}


</style>