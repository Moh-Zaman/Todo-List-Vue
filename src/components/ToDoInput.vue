<template>
    <section>
        <form @submit.prevent>
            <input
            :placeholder="'Enter Tasks Here'">
        </form>
    </section>
</template>

<script>
    export default {
      name: "ToDoInput"  
    }
</script>

<style>

</style>