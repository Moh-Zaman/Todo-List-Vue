<template>
<section>
  <section class="task-list-wrapper">
    <ToDoHeader />
  </section>
  <section>
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


</style>