<template>
  <div class="new-task" v-if="board">
    <button
      class="new-task__button"
      :disabled="board.columns.length === 0"
      @click="modalOpen = true"
    >
      +
    </button>
    <!-- TODO: Create Component for creating and editing tasks -->
    <ModalComponent :content="modalOpen">
      <h2 class="heading-large">Add New Task</h2>

      <div class="modal__section">
        <label for="task-title" class="modal-subheading">Title</label>
        <input
          class="input-component"
          v-model="newTask.title"
          id="task-title"
          placeholder="e.g. Take coffee break"
        />
      </div>

      <div class="modal__section">
        <label for="task-description" class="modal-subheading"
          >Description</label
        >
        <textarea
          class="input-component"
          v-model="newTask.description"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        ></textarea>
      </div>

      <!-- TODO: Create Component for tasks and board -->
      <div class="modal__section">
        <h3 class="modal-subheading">Subtasks</h3>
        <div
          v-for="(subtask, index) in newTask.subtasks"
          :key="index"
          class="list-editable"
        >
          <div class="list-editable__item">
            <input
              class="list-editable__input"
              v-model="subtask.name"
              placeholder="Subtask name"
            />
            <button class="list-editable__remove" @click="removeSubtask(index)">
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
        <button class="button button--secondary" @click="addSubtask">
          + Add New Subtask
        </button>
      </div>

      <div class="modal__section">
        <select class="select-component" v-model="newTask.columnId">
          <option
            v-for="(column, index) in board.columns"
            :key="index"
            :value="column.id"
          >
            {{ column.name }}
          </option>
        </select>
      </div>

      <button @click="addTask" class="button">Create Task</button>
      <button @click="modalOpen = false">Close</button>
    </ModalComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";
import ModalComponent from "./subcomponents/ModalComponent";

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
      modalOpen: false,
    };
  },
  components: { ModalComponent },
  methods: {
    ...mapActions(["addTask"]),
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
