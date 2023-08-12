<template>
  <div v-if="board">
    <button @click="showTaskForm(index)">New Task</button>
    <div v-if="newTask.columnIndex === index">
      <input v-model="newTask.title" placeholder="Task title" />
      <textarea
        v-model="newTask.description"
        placeholder="Task description"
      ></textarea>
      <div v-for="(subtask, index) in newTask.subtasks" :key="index">
        <input v-model="subtask.name" placeholder="Subtask name" />
        <button @click="removeSubtask(index)">x</button>
      </div>
      <select v-model="newTask.columnId">
        <option
          v-for="(column, index) in board.columns"
          :key="index"
          :value="column.id"
        >
          {{ column.name }}
        </option>
      </select>
      <button @click="addSubtask">Add Subtask</button>
      <button @click="addTask">Add Task</button>
    </div>
    <div v-for="(column, index) in board.columns" :key="index">
      <h2>{{ column.name }}</h2>
      <div v-for="task in column.tasks" :key="task.id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <ul>
          <li v-for="subtask in task.subtasks" :key="subtask.id">
            {{ subtask.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["board"],
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        subtasks: [{ name: "" }],
        columnIndex: null,
      },
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    showTaskForm(index) {
      this.newTask.columnIndex = index;
    },
    addSubtask() {
      this.newTask.subtasks.push({ name: "" });
    },
    removeSubtask(index) {
      this.newTask.subtasks.splice(index, 1);
    },
    async addTask() {
      await this.$store.dispatch("addTask", {
        ...this.newTask,
        boardId: this.board.id,
      });
      this.newTask = {
        title: "",
        description: "",
        subtasks: [{ name: "" }],
        columnIndex: null,
      };
    },
  },
};
</script>
