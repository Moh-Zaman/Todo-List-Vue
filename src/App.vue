<template>
<div class="background-header-div">
  <img 
  :src="bgImageDark"
  class="background-header-image"/>
</div>
<div class="task-list-wrapper">
  <TaskList/>
</div>
</template>

<script>
import bgImageDark from "./assets/images/bg-desktop-dark.jpg"
import TaskList from "./components/TaskList.vue";

  export default {
    name: "App",
    data() {
      return {
        bgImageDark: bgImageDark
      }
    },
    components: {
      TaskList,
    },
  }
</script>

<style>
body {
  background-color: hsl(235, 21%, 11%)
}

.background-header-div {
  display: flex;
  flex-direction: column-reverse;
}

.background-header-image {
  width: 100%;
}

.task-list-wrapper {
  display: flex;
  justify-content: center;
}

</style>