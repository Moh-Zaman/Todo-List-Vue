<template>
    <section class="task-input-wrapper">
        <form class="input-form-wrapper" @submit.prevent>
            <label class="checkbox-container">
                <input
                    class="input-checkbox-field"
                    type="checkbox">
                <span class="checkmark"></span>
            </label>
            <input 
                v-model="newTask"
                @keyup.enter="addTaskHandler"
                class="input-text-field"
                :placeholder="'Enter Tasks Here'"
                type="text">
        </form>
    </section>
    <br>
    <section class="task-input-wrapper input-form-wrapper">
        <ul class="list-wrapper">
            <li 
                v-for="(task, i) in tasks" 
                v-bind:key="i"
                @click="toggleCompleted(i)"
                >
                <label class="checkbox-container-list">
                <input
                    class="input-checkbox-field"
                    type="checkbox">
                <span class="checkmark">
                </span>
            </label>
            <span v-bind:class="{ 'completed-task' : task.complete}">
                {{ task.name }}
            </span>
            </li>
        </ul>
    </section>
    <section class="task-input-wrapper footer-wrapper">
        <span>
            {{ taskCount }} Remaining
        </span>
        <span class="footer-middle-text">
            All
        </span>
        <span class="footer-middle-text">
            Active
        </span>
        <span class="footer-middle-text">
            Completed
        </span>
        <span 
            class="footer-clear-text"
            @click="deleteTasks">
            Clear Completed
        </span>
    </section>
</template>

<script>
    export default {
        name: "ToDoInput",
        data() {
            return {
                newTask: "",
                tasks: [
                    {
                        id: 1,
                        name: "Placeholder 1",
                        complete: false                        
                    },
                    {
                        id: 2,
                        name: "Placeholder 2",
                        complete: true
                    },
                    {
                        id: 3,
                        name: "Placeholder 3",
                        complete: true
                    }
                ]
            }
        },
        computed: {
            taskCount() {
                return this.tasks.length 
            },
            newTaskObject() {
                return {
                    id: this.tasks.length + 1,
                    name: this.newTask,
                    complete: false
                }
            }
        },
        methods: {
            addTaskHandler() {
                if (!this.newTask) {
                    return;
                } else {
                    this.tasks.push(this.newTaskObject);
                    this.newTask = "";
                };
            },
            deleteTasks() {
                this.tasks = []
            },
            toggleCompleted(i) {
                this.tasks[i].complete = !this.tasks[i].complete
                console.log(this.tasks[i].complete)
            }
            
        },
    }
</script>


<style>
.task-input-wrapper {
  display: flex;
  border-radius: 5px;
  background: hsl(235, 24%, 19%);
  padding: 20px;
  width: 500px;
  margin: auto;
}

.input-form-wrapper {
    display: flex;
    position: relative;
    font-size: 18px;
}

.input-text-field {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    text-align: left;
    font-size: 18px;
    caret-color: hsl(220, 98%, 61%);
    vertical-align: middle;
    padding-left: 20px;
    width: 400px;
}

.input-checkbox-field {
    position: absolute;
    opacity: 0;
}

.checkbox-container {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 35px;
    margin-right: 10px;
    cursor: pointer;
}

.checkmark {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid hsl(234, 11%, 52%);
    display: inline-block;
    position: relative;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.input-checkbox-field:checked + .checkmark {
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    border: none;
}

.input-checkbox-field:checked + .checkmark:after {
    content: "";
    position: absolute;
    left: 12px;
    top: 5px;
    width: 8px;
    height: 16px;
    border: solid rgb(255, 255, 255);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.checkbox-container:hover .checkmark {
    background-color: hsl(234, 11%, 85%);
}

ul {
    list-style-type: none;
}

.list-wrapper {
    display: grid;
    row-gap: 30px;
    margin: auto;
    width: 100%;
    padding: 0px;
    vertical-align: middle
}

.list-wrapper li {
    display: flex;
    align-items: center;
    color:white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.356);
    padding-bottom: 25px;
    width: 100%;
}

.checkbox-container-list {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 35px;
    margin-right: 30px;
    cursor: pointer;
    
}

.footer-wrapper {
    display:flex;
    justify-content: space-between;
}

.footer-middle-text {
    color: rgb(70, 70, 187);
    cursor: pointer
}

.footer-clear-text {
    cursor: pointer
}

.completed-task {
    text-decoration: line-through;
    color: hsl(234, 11%, 52%);
}
</style>
