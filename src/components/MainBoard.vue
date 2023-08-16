<template>
  <div class="main-board">
    <template v-if="!board"></template>
    <template v-else-if="!board.columns.length">
      <div class="main-board__empty">
        <div>
          <h2 class="heading-large">
            This board is empty. Create a new column to get started.
          </h2>
          <button class="button button--primary" @click="boardModalOpen = true">
            + Add New Column
          </button>
        </div>
      </div>
      <BoardModal
        :board="board"
        :modalOpen="boardModalOpen"
        @close-event="boardModalOpen = false"
      />
    </template>
    <template v-else>
      <div
        class="main-board__column"
        v-for="(column, index) in board.columns"
        :key="index"
      >
        <h2 class="heading-small main-board__title">
          {{ column.name }}
          <template v-if="column.tasks && column.tasks.length"
            >({{ column.tasks.length }})</template
          >
        </h2>
        <draggable
          v-model="column.tasks"
          group="people"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <BoardTask :task="element" @click="showTask(element, column.id)" />
          </template>
        </draggable>
      </div>
    </template>

    <!-- TODO: Create component -->
    <ModalComponent class="task-modal" :content="selectedTask">
      <div class="task-modal__header" v-if="!deleteTask">
        <h2 class="heading-large task-modal__title">
          <template v-if="!editTask">{{ selectedTask.title }}</template>
          <template v-else>Edit Task</template>
        </h2>

        <options-component
          type="Task"
          @edit-event="editTask = $event"
          @close-event="
            selectedTask = null;
            editTask = false;
          "
          @delete-event="deleteTask = true"
        />
      </div>
      <template v-if="deleteTask">
        <DeleteComponent
          @cancel-delete-event="deleteTask = false"
          @delete-confirmation-event="deleteTaskFunction()"
          type="task"
          :title="selectedTask.title"
        />
      </template>
      <template v-else-if="!editTask">
        <div class="modal__section">
          <p class="body-large task-modal__description">
            {{ selectedTask.description }}
          </p>
        </div>

        <div class="modal__section">
          <CheckboxComponent v-bind="{ board, selectedTask }" />
        </div>

        <div class="modal__section">
          <h3 class="modal-subheading">Current Status</h3>
          <select
            class="body-large select-component"
            v-model="selectedTask.columnId"
          >
            <option
              v-for="column in board.columns"
              :value="column.id"
              :key="column.id"
            >
              {{ column.name }}
            </option>
          </select>
        </div>
      </template>
      <template v-else>
        <task-form
          :task="selectedTask"
          :board="board"
          :edit="true"
          @close-event="
            selectedTask = null;
            editTask = false;
          "
        />
      </template>
    </ModalComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
import BoardTask from "./BoardTask.vue";
import ModalComponent from "./subcomponents/ModalComponent.vue";
import CheckboxComponent from "./subcomponents/CheckboxComponent.vue";
import OptionsComponent from "./subcomponents/OptionsComponent.vue";
import TaskForm from "./subcomponents/TaskForm.vue";
import DeleteComponent from "./subcomponents/DeleteComponent.vue";
import BoardModal from "./subcomponents/BoardModal.vue";
import { Task, Column } from "@/types";

export default defineComponent({
  props: ["board"],
  data() {
    return {
      selectedTask: null as Task | null,
      editTask: false,
      deleteTask: false,
      drag: false,
      boardModalOpen: false,
    };
  },
  components: {
    BoardTask,
    ModalComponent,
    CheckboxComponent,
    draggable,
    OptionsComponent,
    TaskForm,
    DeleteComponent,
    BoardModal,
  },
  methods: {
    showTask(task: Task, columnId: string) {
      this.selectedTask = { ...task, columnId: columnId };
    },
    moveTaskToColumn(oldColumnId: string, newColumnId: string) {
      const oldColumn = this.board.columns.find(
        (column: Column) => column.id === oldColumnId
      );

      oldColumn.tasks = oldColumn.tasks.filter(
        (t: Task) => t.id !== this.selectedTask?.id
      );

      const newColumn = this.board.columns.find(
        (column: Column) => column.id === newColumnId
      );

      newColumn.tasks.push(this.selectedTask);
    },
    deleteTaskFunction() {
      this.$store.dispatch("deleteTask", this.selectedTask);
      this.selectedTask = null;
      this.deleteTask = false;
    },
  },
  watch: {
    "selectedTask.columnId": function (newColumnId, oldColumnId) {
      if (
        newColumnId !== oldColumnId &&
        oldColumnId !== null &&
        newColumnId !== null &&
        this.selectedTask
      ) {
        this.moveTaskToColumn(oldColumnId, newColumnId);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.main-board {
  background-color: var(--light-bg);
  position: relative;
  overflow: auto;
  display: flex;

  &__column {
    padding-right: 24px;

    &:last-child {
      padding-right: 16px;
    }
  }

  &__title {
    margin: 8px 0 24px;
  }

  &__empty {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    text-align: center;

    .heading-large {
      color: var(--medium-grey);
      margin-bottom: 25px;
    }
  }

  .dark-mode & {
    background-color: var(--dark-bg);
  }
}

.task-modal {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &__title {
    margin: 0;
  }

  &__description {
    color: var(--medium-grey);
    margin: 24px 0;
  }
}
</style>
