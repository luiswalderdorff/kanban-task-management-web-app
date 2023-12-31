<template>
  <div>
    <h3 class="modal-subheading" v-if="selectedTask.subtasks.length">
      Subtasks ({{ subtasksChecked }} of {{ selectedTask.subtasks.length }})
    </h3>
    <div class="checkboxes-component">
      <label
        class="checkboxes-component__task"
        v-for="(subtask, index) in selectedTask.subtasks"
        :key="subtask.id"
        :for="selectedTask.id + '-' + index"
      >
        <input
          class="checkboxes-component__checkbox"
          type="checkbox"
          :id="selectedTask.id + '-' + index"
          :checked="subtask.checked"
          v-model="subtask.checked"
          @change="updateSubtaskChecked(index, $event.target.checked)"
        />
        <span class="checkboxes-component__description body-medium">{{
          subtask.name
        }}</span>
        <svg
          class="checkboxes-component__check-icon"
          width="10"
          height="8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#FFF"
            stroke-width="2"
            fill="none"
            d="m1.276 3.066 2.756 2.756 5-5"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Subtask } from "@/types";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["board", "selectedTask"],
  computed: {
    subtasksChecked() {
      return this.selectedTask.subtasks.filter(
        (subtask: Subtask) => subtask.checked
      ).length;
    },
  },
  methods: {
    updateSubtaskChecked(subtaskIndex: number, checked: boolean) {
      this.$store.dispatch("updateSubtask", {
        boardId: this.board.id,
        columnId: this.selectedTask.columnId,
        taskId: this.selectedTask.id,
        subtaskIndex: subtaskIndex,
        checked: checked,
      });
    },
  },
});
</script>

<style lang="scss">
.checkboxes-component {
  padding: 0;
  &__task {
    border-radius: 4px;
    background: var(--light-bg);
    padding: 13px;
    margin: 0 16px 8px 0;
    display: block;
    position: relative;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      background: var(--main-purple-hover);
    }
  }
  &__checkbox {
    appearance: none;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: var(--white, #fff);
    width: 16px;
    height: 16px;
    padding: 2px;
    position: relative;
    transition: background-color 0.2s;
    margin: 0;

    &:checked {
      background-color: var(--main-purple);

      & + .checkboxes-component__description {
        text-decoration: line-through;
        color: var(--medium-grey);
      }
    }
  }

  &__description {
    margin-left: 16px;
  }

  &__check-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }

  .dark-mode & {
    &__task {
      background: var(--dark-bg);

      &:hover {
        background: var(--main-purple);
      }
    }
    &__description {
      color: var(--white);
    }
  }
}
</style>
