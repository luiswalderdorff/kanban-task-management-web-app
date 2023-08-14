<template>
  <div class="main-board">
    <div class="main-board__columns" v-if="board">
      <div
        class="main-board__column"
        v-for="(column, index) in board.columns"
        :key="index"
      >
        <h2 class="heading-small main-board__title">
          {{ column.name }}
          <template v-if="column.tasks.length"
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
    </div>

    <!-- TODO: Create component -->
    <ModalComponent class="task-modal" :content="selectedTask">
      <div class="task-modal__header">
        <h2 class="heading-large task-modal__title">
          {{ selectedTask.title }}
        </h2>

        <options-component type="Task" />
      </div>

      <div class="modal__section">
        <p class="body-large task-modal__description">
          {{ selectedTask.description }}
        </p>
      </div>

      <div class="modal__section">
        <CheckboxComponent v-bind="{ board, selectedTask, selectedColumnId }" />
      </div>

      <div class="modal__section">
        <h3 class="modal-subheading">Current Status</h3>
        <select class="body-large select-component" v-model="selectedColumnId">
          <option
            v-for="column in board.columns"
            :value="column.id"
            :key="column.id"
          >
            {{ column.name }}
          </option>
        </select>
      </div>

      <button
        @click="
          selectedTask = null;
          selectedColumnId = null;
        "
      >
        Close
      </button>
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
      selectedTask: null as any,
      selectedColumnId: null as any,
      drag: false,
    };
  },
  components: {
    BoardTask,
    ModalComponent,
    CheckboxComponent,
    draggable,
    OptionsComponent,
  },
  methods: {
    showTask(task: any, columnId: string) {
      this.selectedTask = { ...task };
      this.selectedColumnId = columnId;
    },
    moveTaskToColumn(oldColumnId: string, newColumnId: string) {
      const oldColumn = this.board.columns.find(
        (column: any) => column.id === oldColumnId
      );
      console.log(oldColumnId);

      oldColumn.tasks = oldColumn.tasks.filter(
        (t: any) => t.id !== this.selectedTask.id
      );
      console.log(oldColumn);

      const newColumn = this.board.columns.find(
        (column: any) => column.id === newColumnId
      );

      newColumn.tasks.push(this.selectedTask);
    },
  },
  watch: {
    selectedColumnId: function (newColumnId, oldColumnId) {
      if (
        newColumnId !== oldColumnId &&
        oldColumnId !== null &&
        newColumnId !== null &&
        this.selectedTask
      ) {
        this.moveTaskToColumn(oldColumnId, newColumnId);
      }
    },
    board: {
      deep: true,
      handler() {
        console.log(123);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.main-board {
  background-color: var(--light-bg);
  position: relative;
  overflow: scroll;

  &__columns {
    display: flex;
  }

  &__column {
    padding-right: 24px;

    &:last-child {
      padding-right: 16px;
    }
  }

  &__title {
    margin: 8px 0 24px;
  }
}

.task-modal {
  &__header {
    display: flex;
    justify-content: space-between;
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
