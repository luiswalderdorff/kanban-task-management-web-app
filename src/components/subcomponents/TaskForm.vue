<template>
  <div>
    <div class="modal__section">
      <label for="task-title" class="modal-subheading">Title</label>
      <div class="input-component">
        <input
          class="input-component__input"
          :class="{ 'input-error': !valid && !newTask.title }"
          v-model="newTask.title"
          id="task-title"
          placeholder="e.g. Take coffee break"
        />
        <span v-if="!valid && !newTask.title" class="error-text body-large"
          >Can't be empty</span
        >
      </div>
    </div>

    <div class="modal__section">
      <label for="task-description" class="modal-subheading">Description</label>
      <div class="input-component">
        <textarea
          class="input-component__input"
          v-model="newTask.description"
          :class="{ 'input-error': !valid && !newTask.description }"
          placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        ></textarea>
        <span
          v-if="!valid && !newTask.description"
          class="error-text body-large"
          >Can't be empty</span
        >
      </div>
    </div>

    <div class="modal__section">
      <h3 class="modal-subheading">Subtasks</h3>
      <div
        v-for="(subtask, index) in newTask.subtasks"
        :key="index"
        class="list-editable"
      >
        <div class="list-editable__item">
          <div class="input-component">
            <input
              class="list-editable__input"
              v-model="subtask.name"
              :class="{ 'input-error': !valid && !subtask.name }"
              placeholder="Subtask Name"
            />
            <span v-if="!valid && !subtask.name" class="error-text body-large"
              >Can't be empty</span
            >
          </div>

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

    <button @click="saveTask" class="button">
      <template v-if="!newTask.id">Create</template
      ><template v-else>Edit</template>
      Task
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  emits: ["close-event"],
  props: {
    board: {
      type: Object,
      required: true,
    },
    task: {
      type: Object,
      default: null,
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        subtasks: [{ name: "" }],
        columnId: null,
      },
      valid: true,
    };
  },
  created() {
    if (this.task) {
      this.newTask = this.task;
    } else {
      this.newTask.columnId = this.board.columns[0].id;
    }
  },
  methods: {
    ...mapActions(["addTask"]),
    addSubtask() {
      this.newTask.subtasks.push({ name: "" });
    },
    removeSubtask(index) {
      this.newTask.subtasks.splice(index, 1);
    },
    async saveTask() {
      this.validateForm();
      if (!this.valid) return;
      await this.$store.dispatch("saveTask", this.newTask);
      if (!this.newTask.id) {
        this.newTask = {
          title: "",
          description: "",
          subtasks: [{ name: "" }],
          columnId: null,
        };
      }
      this.$emit("close-event");
    },
    validateForm() {
      this.valid =
        this.newTask.title &&
        this.newTask.description &&
        this.newTask.subtasks.every((subtask) => subtask.name);
    },
  },
});
</script>

<style lang="scss"></style>
