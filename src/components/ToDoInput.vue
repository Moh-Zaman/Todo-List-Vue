<template>
    <section class="task-input-wrapper">
        <form class="input-form-wrapper" @submit.prevent>
            <label class="checkbox-container">
                <input
                    class="input-checkbox-field"
                    type="checkbox"
                    v-model="isChecked"
                    @change="toggleAllTasks">
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
<div>
    <section 
        class="task-input-wrapper input-form-wrapper"
        :class="hideListAll"
        >
        <ul class="list-wrapper">
            <li 
                v-for="(task, i) in filteredTasks" 
                :key="task.id"
                >
                <label class="checkbox-container-list">
                    <input
                        class="input-checkbox-field"
                        type="checkbox"
                        v-model="task.complete"
                        @click="toggleCompleted(task.id)"
                        >
                    <span class="checkmark">
                    </span>
            </label>
            <span :class="{'completed-task' : task.complete}">
                {{ task.name }}
            </span>
            <span 
            class="crossBtnIcon"
            @click="deleteOneTask(i)">
                <img :src="crossBtn">
            </span>
            </li>
        </ul>
    </section>
</div>
    <section 
        class="footer-selection-wrapper footer-wrapper"
        :class="hideListAll"
        >
        <span>
            {{ taskCount }} Remaining
        </span>
        <span 
            class="footer-middle-text"
            :class="{'highlight-selection' : this.filter == 'all'}"
            @click="showList('all')">
            All
        </span>
        <span 
            class="footer-middle-text"
            :class="{'highlight-selection' : this.filter == 'active'}"
            @click="showList('active')">
            Active
        </span>
        <span 
            class="footer-middle-text"
            :class="{'highlight-selection' : this.filter == 'completed'}"
            @click="showList('completed')">
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
import cross from "../assets/images/icon-cross.svg"

    export default {
        name: "ToDoInput",
        data() {
            return {
                newTask: "",
                tasks: [
                    {
                        id: this.randomNumberGen() + 1,
                        name: "Placeholder 1",
                        complete: false                        
                    },
                    {
                        id: this.randomNumberGen() + 2,
                        name: "Placeholder 2",
                        complete: true
                    },
                    {
                        id: this.randomNumberGen() + 3,
                        name: "Placeholder 3",
                        complete: true
                    }
                ],
                filter: "all",
                crossBtn: cross,
                isChecked: false
            }
        },
        computed: {
            taskCount() {
                return this.tasks.filter(task => !task.complete).length
            },
            newTaskObject() {
                return {
                    id: this.randomNumberGen(),
                    name: this.newTask,
                    complete: false
                }
            },
            filteredTasks() {
                if (this.filter === "active") {
                    return this.tasks.filter(task => !task.complete)
                } else if (this.filter === "completed") {
                    return this.tasks.filter(task => task.complete)
                } else return this.tasks
            },
            hideListAll() {
                return {
                    "task-list-hide": this.tasks.length === 0
                }
            },
        },
        methods: {
            addTaskHandler() {
                if (!this.newTask) {
                    return;
                } else {
                    this.tasks.push(this.newTaskObject);
                    this.newTask = "";
                    this.isChecked = false
                };
            },
            deleteTasks() {
                this.tasks = this.tasks.filter(task => !task.complete)
            },
            toggleCompleted(id) {
                const i = this.tasks.findIndex(task => task.id === id)
                this.tasks[i].complete = !this.tasks[i].complete;
                this.isChecked = this.tasks.every(task => task.complete);
                console.log(id)
            },
            deleteOneTask(i) {
                this.tasks.splice(i, 1)
            },
            toggleAllTasks() {
                this.tasks.forEach(task => task.complete = this.isChecked)
            },
            randomNumberGen() {
                return Date.now() + Math.floor(Math.random())
            },
            showList(display) {
                switch(display) {
                    case 'all':
                        this.filter = "all";
                        break;
                    case 'active':
                        this.filter = "active";
                        break;
                    case 'completed':
                        this.filter = "completed";
                        break;
                    default:
                        this.filter = "all"
                }
            },          
        },
    }
</script>


<style>
.task-input-wrapper {
    display: flex;
    border-radius: 5px 5px 0 0;
    background: hsl(235, 24%, 19%);
    padding: 20px;
    width: 500px;
    margin: auto;
}

.footer-selection-wrapper {
    display: flex;
    border-radius: 0 0 5px 5px;
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
    border: 1px solid hsl(234, 11%, 52%);
    display: inline-block;
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
    justify-content: space-between;
    position: relative
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

.task-list-hide {
    display: none
}

.crossBtnIcon {
    cursor: pointer;
    margin-left: auto;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.list-wrapper li:hover .crossBtnIcon {
    opacity: 1;
}

.highlight-selection {
    color: rgb(166, 166, 221)
}
</style>
