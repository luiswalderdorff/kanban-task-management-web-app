<template>
  <div>
    <button @click="showForm = true">New Board</button>
    <div v-if="showForm">
      <input v-model="newBoard.name" placeholder="Board name" />
      <div v-for="(column, index) in newBoard.columns" :key="index">
        <input v-model="column.name" placeholder="Column name" />
        <button @click="removeColumn(index)">x</button>
      </div>
      <button @click="addColumn">Add Column</button>
      <button @click="createBoard">Create Board</button>
    </div>
  </div>
  <div v-for="(board, index) in boards" :key="index">
    <button
      @click="selectBoard(board.id)"
      :class="{ active: board.id === selectedBoard }"
    >
      {{ board.name }}
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      showForm: false,
      newBoard: {
        name: "",
        columns: [{ name: "", tasks: [] }],
      },
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
    selectedBoard() {
      return this.$store.state.selectedBoard;
    },
  },
  methods: {
    ...mapActions(["addBoard"]),
    ...mapActions(["selectBoard"]),
    addColumn() {
      this.newBoard.columns.push({ name: "", id: uuidv4(), tasks: [] });
    },
    removeColumn(index) {
      this.newBoard.columns.splice(index, 1);
    },
    async createBoard() {
      await this.addBoard(this.newBoard);
      this.newBoard = {
        name: "",
        columns: [{ name: "", tasks: [] }],
      };
      this.showForm = false;
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
