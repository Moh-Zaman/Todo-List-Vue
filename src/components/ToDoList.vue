<template>
  <div>
    <section class="task-list-wrapper input-form-wrapper" :class="hideListAll">
      <ul class="list-wrapper" id="sortable-list">
        <li
          v-for="[key, task] in (filteredTasks)"
          :key="key"
          draggable="true"
          @click="taskEvents"
          :data-task-id="key"
        >
          <ToDoTasks :task="task" />
        </li>
      </ul>
    </section>
  </div>
  <section class="footer-selection-wrapper footer-wrapper" :class="hideListAll">
    <span> {{ taskCount }} Remaining </span>
    <span
      class="footer-middle-text"
      :class="{ 'highlight-selection': this.filter == 'all' }"
      @click="showList('all')"
    >
      All
    </span>
    <span
      class="footer-middle-text"
      :class="{ 'highlight-selection': this.filter == 'active' }"
      @click="showList('active')"
    >
      Active
    </span>
    <span
      class="footer-middle-text"
      :class="{ 'highlight-selection': this.filter == 'completed' }"
      @click="showList('completed')"
    >
      Completed
    </span>
    <span class="footer-clear-text" @click="taskList.parentDeleteTasks()">
      Clear Completed
    </span>
  </section>
</template>

<script>
import ToDoTasks from "./ToDoTasks.vue";

//Drag and Drop
window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("sortable-list");

  let draggedItem = null;

  // Drag start
  list.addEventListener("dragstart", (event) => {
    draggedItem = event.target;
  });

  // Drag over
  list.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  // Drop
  list.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.tagName === "LI" && event.target !== draggedItem) {
      const dropTarget = event.target;
      if (dropTarget === list.firstElementChild) {
        list.insertBefore(draggedItem, dropTarget);
      } else {
        list.insertBefore(draggedItem, dropTarget.nextSibling);
      }
    }
  });
});

export default {
  name: "ToDoList",
  components: {
    ToDoTasks,
  },
  data() {
    return {
      newTask: "",
      filter: "all",
    };
  },
  computed: {
    taskCount() {
      return Array.from(this.taskList.tasks.entries()).filter(([key, value]) => !value.complete).length
    },
    filteredTasks() {
      const outputArray = Array.from(this.taskList.tasks.entries())
      if (this.filter === "active") {
        return outputArray.filter(([key, value]) => !value.complete);
      } else if (this.filter === "completed") {
        return outputArray.filter(([key, value]) => !value.complete);
      } else return outputArray
    },
    hideListAll() {
      const arrayLength = Array.from(this.taskList.tasks).filter((value) => !value.complete).length
      return {        
        "task-list-hide": arrayLength === 0,
      };
    },
  },
  methods: {
    showList(display) {
      switch (display) {
        case "active":
          this.filter = "active";
          break;
        case "completed":
          this.filter = "completed";
          break;
        case "all":
        default:
          this.filter = "all";
      }
    },
    taskEvents(event) {
      const taskID = event.currentTarget.dataset.taskId;
      const action = event.target.dataset.action
      if (action === "complete") {
        this.taskList.parentToggleCompleted(Number(taskID));
      } else if (action === "delete") {
        this.taskList.parentDeleteOneTask(Number(taskID));
      }
    },
  },
  props: {
    taskList: Object,
  },
};
</script>

<style>
.task-list-wrapper {
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

.input-checkbox-field {
  position: absolute;
  opacity: 0;
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
  background: linear-gradient(
    to right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );
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

ul {
  list-style-type: none;
}

.list-wrapper {
  display: grid;
  row-gap: 30px;
  margin: auto;
  width: 100%;
  padding: 0px;
  vertical-align: middle;
}

.list-wrapper li {
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.356);
  padding-bottom: 25px;
  width: 100%;
  justify-content: space-between;
  position: relative;
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
  display: flex;
  justify-content: space-between;
  color: hsl(234, 11%, 52%);
}

.footer-middle-text {
  color: rgb(70, 70, 187);
  cursor: pointer;
}

.footer-clear-text {
  cursor: pointer;
}

.completed-task {
  text-decoration: line-through;
  color: hsl(234, 11%, 52%);
}

.task-list-hide {
  display: none;
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
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 0.01em 16px;
}
</style>
