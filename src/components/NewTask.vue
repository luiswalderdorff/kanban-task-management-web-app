<template>
  <div class="new-task" v-if="board">
    <button
      class="new-task__button"
      :disabled="board.columns.length === 0"
      @click="showTaskForm(index)"
    >
      +
    </button>
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
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
        id: uuidv4(),
      });
      this.newTask = {
        title: "",
        description: "",
        subtasks: [{ name: "" }],
        columnIndex: null,
      };
    },
  },
});
</script>

<style lang="scss">
.new-task {
  &__button {
    background-color: var(--main-purple);
    color: var(--white);
    border-radius: 25px;
    font-weight: bold;
    font-size: 23px;
    height: 32px;
    width: 48px;

    &:disabled {
      opacity: 0.25;
    }
  }
}
</style>
