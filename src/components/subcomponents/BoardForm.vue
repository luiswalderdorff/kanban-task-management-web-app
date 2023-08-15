<template>
  <div>
    <div class="modal__section">
      <label for="task-title" class="modal-subheading">Board Name</label>
      <input
        class="input-component"
        v-model="newBoard.name"
        id="task-title"
        placeholder="e.g. Take coffee break"
      />
    </div>

    <div class="modal__section">
      <h3 class="modal-subheading">Board Columns</h3>
      <div
        v-for="(column, index) in newBoard.columns"
        :key="index"
        class="list-editable"
      >
        <div class="list-editable__item">
          <input
            class="list-editable__input"
            v-model="column.name"
            placeholder="Subtask name"
          />
          <button class="list-editable__remove" @click="removeColumn(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <rect
                x="12.7279"
                width="3"
                height="18"
                transform="rotate(45 12.7279 0)"
                fill="#828FA3"
              />
              <rect
                y="2.12109"
                width="3"
                height="18"
                transform="rotate(-45 0 2.12109)"
                fill="#828FA3"
              />
            </svg>
          </button>
        </div>
      </div>
      <button class="button button--secondary" @click="addColumn">
        + Add New Column
      </button>
    </div>

    <button @click="saveBoard" class="button board-button">
      <template v-if="!newBoard.id">Create New Board</template
      ><template v-else>Save Changes</template>
    </button>
    <button @click="cancelEdit" class="button button--secondary">Cancel</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  emits: ["close-event"],
  props: {
    board: {
      type: Object,
      required: true,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newBoard: {
        name: "",
        id: null,
        columns: [{ name: "", id: uuidv4(), tasks: [] }],
      },
    };
  },
  created() {
    if (this.board) {
      this.newBoard = JSON.parse(JSON.stringify(this.board));
    }
  },
  methods: {
    ...mapActions(["addTask"]),
    addColumn() {
      this.newBoard.columns.push({ name: "", id: uuidv4(), tasks: [] });
    },
    removeColumn(index) {
      if (this.newBoard.columns.length > 1) {
        const tasksToMove = this.newBoard.columns[index].tasks;
        if (index === 0) {
          this.newBoard.columns[1].tasks =
            this.newBoard.columns[1].tasks.concat(tasksToMove);
        } else {
          this.newBoard.columns[index - 1].tasks =
            this.newBoard.columns[index - 1].tasks.concat(tasksToMove);
        }
      }
      this.newBoard.columns.splice(index, 1);
    },
    cancelEdit() {
      this.$emit("close-event");
    },
    async saveBoard() {
      await this.$store.dispatch("saveBoard", this.newBoard);
      this.newBoard = {
        name: "",
        id: null,
        columns: [{ name: "", id: uuidv4(), tasks: [] }],
      };
      this.$emit("close-event");
    },
  },
});
</script>

<style lang="scss" scopred>
.board-button {
  margin-bottom: 16px;
}
</style>
